function ProductCard({ title, description, price, badge, image }) {
  return (
    <article className="card tasting-card">
      <div className="tasting-card__visual">
        <img alt={title} src={image} />
      </div>
      <div className="tasting-card__body">
        <div className="tasting-card__row">
          <h3>{title}</h3>
          <strong>{price}</strong>
        </div>
        <p>{description}</p>
        {badge ? <span className="pill pill--ghost">{badge}</span> : null}
      </div>
    </article>
  )
}

export default ProductCard
