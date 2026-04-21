function InfoCard({ title, text, meta, image, className = '' }) {
  return (
    <article className={`card info-card ${className}`.trim()}>
      {image ? (
        <div className="info-card__image-wrap">
          <img alt={title} className="info-card__image" src={image} />
        </div>
      ) : null}
      <h3>{title}</h3>
      <p>{text}</p>
      {meta ? <span className="info-card__meta">{meta}</span> : null}
    </article>
  )
}

export default InfoCard
