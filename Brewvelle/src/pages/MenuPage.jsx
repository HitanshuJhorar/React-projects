import { useEffect, useState } from 'react'
import ProductCard from '../components/cards/ProductCard'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { menuSections } from '../data/menuData'
import useReveal from '../hooks/useReveal'

function MenuCategorySection({ section }) {
  const revealRef = useReveal()

  return (
    <section className="menu-category reveal-fade" id={section.id} ref={revealRef}>
      <div className="menu-category__header reveal-up" style={{ '--delay': '0ms' }}>
        <p className="menu-category__eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p className="menu-category__description">{section.description}</p>
      </div>
      <div className="menu-category__grid">
        {section.items.map((item, index) => (
          <ProductCard
            key={item.title}
            className="menu-item-card reveal-up"
            {...item}
            style={{ '--delay': `${Math.min(index * 70, 280)}ms` }}
          />
        ))}
      </div>
    </section>
  )
}

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuSections[0].id)

  useEffect(() => {
    const sections = menuSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length) {
          setActiveCategory(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-24% 0px -58% 0px',
        threshold: [0.18, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleCategoryClick = (id) => {
    const target = document.getElementById(id)

    if (target) {
      setActiveCategory(id)
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="menu-page">
      <Container className="menu-page__hero">
        <p className="menu-page__eyebrow">Brewvelle Menu</p>
        <h1>Curated Coffee, Refined Plates, and Sweet Finishes.</h1>
        <p className="menu-page__intro">
          Explore our full cafe menu by category, from signature drinks and bakery desserts to
          brunch favorites and seasonal specials.
        </p>
        <div className="menu-page__hero-actions">
          <Button className="menu-page__hero-btn" href="tel:+919999999999" size="sm">
            Call to Order
          </Button>
          <Button
            className="menu-page__hero-btn"
            href="https://wa.me/919999999999"
            rel="noreferrer"
            size="sm"
            target="_blank"
            variant="secondary"
          >
            WhatsApp
          </Button>
        </div>
      </Container>

      <div className="menu-page__category-bar-wrap">
        <Container>
          <nav aria-label="Menu categories" className="menu-page__category-bar">
            {menuSections.map((section) => (
              <button
                className={`menu-page__category-pill ${activeCategory === section.id ? 'menu-page__category-pill--active' : ''}`}
                key={section.id}
                onClick={() => handleCategoryClick(section.id)}
                type="button"
              >
                {section.label}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      <section className="section menu-page__section">
        <Container className="panel panel--menu panel--menu-page">
          <div className="menu-page__sections">
            {menuSections.map((section) => (
              <MenuCategorySection key={section.id} section={section} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default MenuPage
