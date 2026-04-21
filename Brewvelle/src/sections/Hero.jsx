import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

const heroImages = {
  latte:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDYmmO_Un0m2D5QOVn7dRnWwVzlBC7B5dWjfEECJQWlveJnKU05Zi3Z7bfXWfmPMDyFppz7YiUetlRXP3Ng0AqH07ey8qbLtr7tDvnmO0kYOyC0t3sfdSCbZ-zDu3UK7-ULzc7gujHKoSADFImUNvLA0gDNWxzEyhlDX_630hr0hcLn2cs1h4g_98Vx3WAA9iYss8u0J-UWlRdlcsn78uYPtlCFo7_eZcjEADmfCc5W2X7dfCHDlE5PO71FOzIBXM-omoO4Re3Flok',
  beans:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAk0xnt-Pj5ePxEG97tCjgNYJ8JE5y6hAaW85hNcuMR8Ds6yyCelHnwQlubFhhTaWXhSGKbNjfg0eZd_eJqXSXhaH-j42tAXBwK5FUsmTUU74A83Dd1gvQ67mHDwjepETTO7xOwzAKj51QCL6kq8iNv-zb9M0EGJ-Gnb6tp3s7prCBkImg8OxlieFDAbFdbffVZkcJ9A80aY2SvCh8SR8nCrJl673KCqb5nR5JiPcx2RLAJ2U-b0maRiSzdMVEETglIM73W2ZS-Gwg',
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container className="hero-section__grid">
        <div className="hero-copy">
          <p className="hero-section__kicker">
            Est. 2024 <span>&bull;</span> Portland
          </p>
          <h1>
            The Art
            <span>of the Slow</span>
            <span className="hero-copy__last-line">Morning.</span>
          </h1>
          <p className="hero-section__lead">
            A sanctuary for those who appreciate the poetry of a quiet dawn, masterfully roasted
            artisan coffee, and truly intentional conversation.
          </p>
          <div className="hero-section__actions">
            <Button href="#menu" size="sm" className="hero-btn-primary">
              View Menu
            </Button>
            <Button href="#find-us" variant="link" size="sm" className="hero-btn-link">
              <span>Book a Table</span>
              <span className="hero-btn-link__arrow">-&gt;</span>
            </Button>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="hero-showcase__blob"></div>

          <article className="featured-latte">
            <div className="featured-latte__image">
              <img alt="Lavender latte with intricate latte art in a ceramic cup." src={heroImages.latte} />
            </div>
            <div className="featured-latte__content">
              <h2>Signature Lavender Latte</h2>
              <p>House espresso, steamed oat milk, organic lavender syrup.</p>
            </div>
            <div className="featured-latte__footer">
              <div className="featured-latte__tags">
                <span>Floral</span>
                <span>Hot</span>
              </div>
              <strong>$6.50</strong>
            </div>
          </article>

          <article className="bean-card">
            <div className="bean-card__image">
              <img alt="Bag of artisanal coffee beans" src={heroImages.beans} />
            </div>
            <div className="bean-card__content">
              <h3>Ethiopia Yirgacheffe</h3>
              <p>Single Origin - Light Roast</p>
              <div className="bean-card__stars" aria-label="4 and a half stars">
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>o</span>
              </div>
              <Button variant="secondary" size="sm" className="bean-card__button">
                Add to Cart - $22
              </Button>
            </div>
          </article>

          <article className="stats-card">
            <div className="stats-card__top">
              <div className="stats-card__icon">C</div>
              <span>Daily Brews</span>
            </div>
            <strong>
              240<span>+</span>
            </strong>
            <p>Cups poured today</p>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default Hero
