export default function PageHero({ image, alt = '', title, subtitle }) {
  return (
    <section className="page-hero">
      <img
        className="page-hero-image"
        src={image}
        alt={alt}
        loading="eager"
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
