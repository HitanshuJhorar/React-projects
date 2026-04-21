import ProductCard from '../components/cards/ProductCard'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import { featuredDrinks, featuredSpotlight } from '../data/menuData'

function Menu() {
  return (
    <section className="section" id="menu">
      <Container className="panel panel--menu">
        <SectionTitle eyebrow="Curated offerings" title="Tasting Notes" align="center" />
        <div className="menu-spotlight">
          <div className="menu-spotlight__visual">
            <img alt={featuredSpotlight.title} src={featuredSpotlight.image} />
          </div>
          <article className="menu-spotlight__content">
            <div className="menu-spotlight__row">
              <h3>{featuredSpotlight.title}</h3>
              <strong>{featuredSpotlight.price}</strong>
            </div>
            <p>{featuredSpotlight.description}</p>
            <div className="menu-spotlight__actions">
              <Button size="sm">Order Now</Button>
              <Button href="/menu" variant="secondary" size="sm">
                View Full Menu
              </Button>
            </div>
          </article>
        </div>
        <div className="featured-products">
          {featuredDrinks.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </div>
        <div className="menu-footer-action">
          <Button href="/menu" variant="secondary" size="sm">
            Browse Full Menu
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Menu
