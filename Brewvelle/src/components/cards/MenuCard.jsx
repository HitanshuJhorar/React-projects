function MenuCard({ category, items }) {
  return (
    <article className="card menu-card">
      <h3>{category}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <div>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </div>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default MenuCard
