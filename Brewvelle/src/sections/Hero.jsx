import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container className="hero-section__grid">
        <div>
          <p className="section-title__eyebrow">Coffee crafted with calm</p>
          <h1>Neighborhood coffee with a slow, elegant rhythm.</h1>
          <p className="hero-section__lead">
            Brewvelle brings together carefully roasted beans, house-made treats, and a space
            designed for long conversations and quiet focus.
          </p>
          <div className="hero-section__actions">
            <Button href="#menu">Explore Menu</Button>
            <Button href="#find-us" variant="secondary">
              Visit the Cafe
            </Button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual__cup"></div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
