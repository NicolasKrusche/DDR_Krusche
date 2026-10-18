// Generates a static Russian version of every page under /ru/ after the build.
//
// The German pages carry their Russian text in data-lang-de / data-lang-ru
// attributes. For each built page we copy the HTML, swap in the Russian texts,
// point internal links to /ru/..., and add canonical + hreflang tags so that
// search engines can index both languages as separate URLs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, serialize } from 'parse5';

const HTML_NS = 'http://www.w3.org/1999/xhtml';
const SKIP_DIRS = new Set(['_astro', 'images', 'ru']);

// Russian versions of accessibility/image texts that live in attributes (alt, aria-label, title).
const ATTR_RU = {
  'Hauptnavigation': 'Главная навигация',
  'Menü öffnen': 'Открыть меню',
  'DDr. Anastasiya Krusche': 'Доктор Анастасия Круше',
  'DDr. Anastasiya Krusche — Portraitfoto': 'Доктор Анастасия Круше — портрет',
  'DDr. Anastasiya Krusche — Gynäkologin in Österreich': 'Доктор Анастасия Круше — гинеколог в Австрии',
  'Beckenbodenstimulation (HIFEM) in der Ordination von DDr. Krusche': 'Стимуляция тазового дна (HIFEM) в ординации доктора Круше',
  'Elektromagnetische Beckenbodenstimulation (HIFEM)': 'Электромагнитная стимуляция тазового дна (HIFEM)',
  'Familienplanung': 'Планирование семьи',
  'Genetische Beratung': 'Генетическое консультирование',
  'Genetische Abklärung': 'Генетическое обследование',
  'Impfungen': 'Вакцинация',
  'Gynäkologische Vorsorgeuntersuchung': 'Гинекологический профилактический осмотр',
  'Vorsorgeuntersuchung': 'Профилактический осмотр',
  'Jugendgynäkologie': 'Подростковая гинекология',
  'Schwangerschaftsbegleitung': 'Ведение беременности',
  'Verhütungsberatung': 'Консультация по контрацепции',
  'Wechseljahre': 'Менопауза',
  'Ultraschalldiagnostik': 'УЗИ диагностика',
  'Ordination Hochstraß': 'Ординация Hochstraß',
  'Ordination Mödling': 'Ординация Mödling',
  'Ordination Mödling — Gynäkologische Praxis DDr. Krusche': 'Ординация Mödling — гинекологическая практика доктора Круше',
  'Ordination Hochstraß — Gynäkologische Praxis DDr. Krusche': 'Ординация Hochstraß — гинекологическая практика доктора Круше',
  'Karte Ordination Hochstraß': 'Карта: ординация Hochstraß',
  'Karte Ordination Mödling': 'Карта: ординация Mödling',
  'Menopause-Sprechstunde: Beratung in den Wechseljahren': 'Менопаузальная консультация: консультирование в период менопаузы',
  'Menopause-Sprechstunde': 'Менопаузальная консультация',
};
const ATTR_NAMES = ['alt', 'aria-label', 'title'];

const getAttr = (el, name) => el.attrs?.find((a) => a.name === name)?.value;
const hasAttr = (el, name) => el.attrs?.some((a) => a.name === name);
function setAttr(el, name, value) {
  const attr = el.attrs.find((a) => a.name === name);
  if (attr) attr.value = value;
  else el.attrs.push({ name, value });
}
const removeAttr = (el, name) => { el.attrs = el.attrs.filter((a) => a.name !== name); };

function walk(node, fn) {
  fn(node);
  for (const child of [...(node.childNodes ?? [])]) walk(child, fn);
}

const textNode = (value, parent) => ({ nodeName: '#text', value, parentNode: parent });

function textOf(node) {
  let out = '';
  walk(node, (n) => { if (n.nodeName === '#text') out += n.value; });
  return out;
}

function makeLink(parent, attrs) {
  return {
    nodeName: 'link',
    tagName: 'link',
    namespaceURI: HTML_NS,
    attrs: Object.entries(attrs).map(([name, value]) => ({ name, value })),
    childNodes: [],
    parentNode: parent,
  };
}

function* htmlFiles(dir, root = dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (dir === root && SKIP_DIRS.has(entry.name)) continue;
      yield* htmlFiles(full, root);
    } else if (entry.name === 'index.html') {
      yield full;
    }
  }
}

// dist-relative file -> German URL path ("x/index.html" -> "/x/")
function dePathOf(rel) {
  const dir = path.posix.dirname(rel.split(path.sep).join('/'));
  return dir === '.' ? '/' : `/${dir}/`;
}

function toRuHref(href) {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const m = href.match(/^([^?#]*)(.*)$/);
  const p = m[1];
  if (/^\/(_astro|images|api)\//.test(p) || /\.[a-z0-9]+$/i.test(p)) return href;
  const withSlash = p === '/' ? '/' : p.endsWith('/') ? p : `${p}/`;
  return `/ru${withSlash}${m[2]}`;
}

function toRussian(html, dePath, site) {
  const doc = parse(html);
  const ruUrl = `${site}/ru${dePath}`;
  let head;

  walk(doc, (el) => {
    if (el.tagName === 'html') setAttr(el, 'lang', 'ru');
    if (el.tagName === 'head') head = el;
    if (!el.attrs) return;

    const ru = getAttr(el, 'data-lang-ru');
    if (ru !== undefined && hasAttr(el, 'data-lang-de')) {
      if (el.tagName === 'meta') setAttr(el, 'content', ru);
      else if (el.tagName === 'input' || el.tagName === 'textarea') setAttr(el, 'placeholder', ru);
      else el.childNodes = [textNode(ru, el)];
    }
    removeAttr(el, 'data-lang-de');
    removeAttr(el, 'data-lang-ru');
    for (const a of el.attrs) {
      if (ATTR_NAMES.includes(a.name) && ATTR_RU[a.value]) a.value = ATTR_RU[a.value];
    }

    const id = getAttr(el, 'id');
    if (id === 'lang-toggle-desktop' || id === 'lang-toggle-mobile') {
      setAttr(el, 'href', dePath);
      setAttr(el, 'lang', 'de');
      setAttr(el, 'hreflang', 'de');
      el.childNodes = [textNode('Deutsch', el)];
    } else if (el.tagName === 'a' && hasAttr(el, 'href')) {
      setAttr(el, 'href', toRuHref(getAttr(el, 'href')));
    }
  });

  // Head: titles, canonical, hreflang, structured data
  const title = textOf(head.childNodes.find((n) => n.tagName === 'title'));
  const metaDesc = head.childNodes.find((n) => n.tagName === 'meta' && getAttr(n, 'name') === 'description');
  const description = metaDesc ? getAttr(metaDesc, 'content') : '';

  for (const n of [...head.childNodes]) {
    if (n.tagName === 'link' && getAttr(n, 'rel') === 'canonical') {
      setAttr(n, 'href', ruUrl);
    } else if (n.tagName === 'meta') {
      const prop = getAttr(n, 'property');
      if (prop === 'og:title') setAttr(n, 'content', title);
      else if (prop === 'og:description') setAttr(n, 'content', description);
      else if (prop === 'og:url') setAttr(n, 'content', ruUrl);
      else if (prop === 'og:locale') setAttr(n, 'content', 'ru_RU');
    } else if (n.tagName === 'script' && getAttr(n, 'type') === 'application/ld+json') {
      // Only the practice-level data is kept; page-level data (FAQ, breadcrumbs) is German.
      let type;
      try { type = JSON.parse(textOf(n))['@type']; } catch { /* keep unknown blocks */ }
      if (type && type !== 'MedicalBusiness') head.childNodes.splice(head.childNodes.indexOf(n), 1);
    }
  }

  addHreflang(head, dePath, site);
  return serialize(doc);
}

function addHreflang(head, dePath, site) {
  const canonical = head.childNodes.find((n) => n.tagName === 'link' && getAttr(n, 'rel') === 'canonical');
  if (!canonical) return;
  const robots = head.childNodes.find((n) => n.tagName === 'meta' && getAttr(n, 'name') === 'robots');
  if (robots && /noindex/i.test(getAttr(robots, 'content') ?? '')) return;
  const alternates = [
    ['de', `${site}${dePath}`],
    ['ru', `${site}/ru${dePath}`],
    ['x-default', `${site}${dePath}`],
  ].map(([hreflang, href]) => makeLink(head, { rel: 'alternate', hreflang, href }));
  const at = head.childNodes.indexOf(canonical) + 1;
  head.childNodes.splice(at, 0, ...alternates);
}

export default function russianPages({ site }) {
  return {
    name: 'russian-pages',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = [...htmlFiles(root)];
        let count = 0;
        for (const file of files) {
          const rel = path.relative(root, file);
          const dePath = dePathOf(rel);
          const html = fs.readFileSync(file, 'utf8');

          const ruHtml = toRussian(html, dePath, site);
          const out = path.join(root, 'ru', rel);
          fs.mkdirSync(path.dirname(out), { recursive: true });
          fs.writeFileSync(out, ruHtml);
          count++;

          // Add hreflang alternates to the German page with a string edit (keeps the original markup untouched).
          const doc = parse(html);
          let head;
          walk(doc, (n) => { if (n.tagName === 'head') head = n; });
          const before = head.childNodes.length;
          addHreflang(head, dePath, site);
          if (head.childNodes.length > before) {
            const canonical = html.match(/<link rel="canonical"[^>]*>/)?.[0];
            if (canonical) {
              const tags = [
                ['de', `${site}${dePath}`],
                ['ru', `${site}/ru${dePath}`],
                ['x-default', `${site}${dePath}`],
              ].map(([l, h]) => `<link rel="alternate" hreflang="${l}" href="${h}">`).join('');
              fs.writeFileSync(file, html.replace(canonical, canonical + tags));
            }
          }
        }
        logger.info(`Generated ${count} Russian pages under /ru/`);
      },
    },
  };
}
