function ProductCard({ title, description, price, badge }) {
  return (
    <article className="card product-card">
      {badge ? <span className="pill">{badge}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </article>
  )
}

export default ProductCard
