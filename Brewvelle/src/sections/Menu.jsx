import MenuCard from '../components/cards/MenuCard'
import ProductCard from '../components/cards/ProductCard'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import { featuredDrinks, menuGroups } from '../data/menuData'

function Menu() {
  return (
    <section className="section section--accent" id="menu">
      <Container>
        <SectionTitle
          eyebrow="Signature menu"
          title="Favorites for regulars and first sips alike."
          description="A starter structure you can expand with your real products later."
        />
        <div className="grid grid--three">
          {featuredDrinks.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </div>
        <div className="grid grid--two menu-layout">
          {menuGroups.map((group) => (
            <MenuCard key={group.category} {...group} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Menu
