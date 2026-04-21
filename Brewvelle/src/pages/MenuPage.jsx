import ProductCard from '../components/cards/ProductCard'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import { fullMenuItems } from '../data/menuData'

function MenuPage() {
  return (
    <main className="menu-page">
      <Container className="menu-page__hero">
        <p className="menu-page__eyebrow">Brewvelle Menu</p>
        <h1>Curated Plates, Pastries, and Slow Coffee.</h1>
        <p className="menu-page__intro">
          A dedicated menu page with all of our featured drinks, signature bites, and bakery
          favorites in one place.
        </p>
      </Container>

      <section className="section menu-page__section">
        <Container className="panel panel--menu panel--menu-page">
          <SectionTitle
            eyebrow="Full offerings"
            title="Browse Full Menu"
            align="center"
          />
          <div className="featured-products featured-products--full">
            {fullMenuItems.map((item) => (
              <ProductCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default MenuPage
