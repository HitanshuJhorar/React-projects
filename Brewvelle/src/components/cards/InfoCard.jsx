function InfoCard({ title, text }) {
  return (
    <article className="card info-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default InfoCard
