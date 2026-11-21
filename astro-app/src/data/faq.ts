// Question/answer pairs (German + Russian) for the FAQ blocks on service pages.
export interface FaqItem {
  qDe: string;
  qRu: string;
  aDe: string;
  aRu: string;
}

// FAQPage structured data for search engines (German text, used on the German pages).
export const faqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.qDe,
    acceptedAnswer: { '@type': 'Answer', text: item.aDe },
  })),
});
