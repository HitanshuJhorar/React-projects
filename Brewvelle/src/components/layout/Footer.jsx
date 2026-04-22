import Container from '../ui/Container'

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <Container className="site-footer__inner site-footer__inner--exact">
        <div className="site-footer__brand">
          <strong>Brewvelle</strong>
          <p>Crafted for the slow morning.</p>
        </div>
        <div className="site-footer__column">
          <span>Explore</span>
          <a href="/">Home</a>
          <a href="/#process">Our Story</a>
          <a href="/#find-us">Reservations</a>
          <a href="/#footer">Journal</a>
        </div>
        <div className="site-footer__column">
          <span>Opening Hours</span>
          <p>Mon - Fri: 7:00 AM - 4:00 PM</p>
          <p>Sat - Sun: 8:00 AM - 5:00 PM</p>
        </div>
        <div className="site-footer__column">
          <span>Contact Info</span>
          <p>123 Artisan Ave, Suite 100</p>
          <p>Portland, OR 97204</p>
          <p>(555) 123-4567</p>
        </div>
        <div className="site-footer__column">
          <span>Follow Us</span>
          <div className="social-list" aria-label="Social links">
            <a href="#footer" aria-label="Brand awareness">B</a>
            <a href="#footer" aria-label="Public">P</a>
            <a href="#footer" aria-label="Interests">I</a>
          </div>
        </div>
      </Container>
      <Container className="site-footer__bottom">
        <p>(c) 2024 Brewvelle. All rights reserved.</p>
        <p style={{ fontSize: '1.2rem', fontWeight: '500', color: 'var(--brand-color, inherit)' }}>Made by Hitanshu</p>
        <div>
          <a href="#footer">Privacy</a>
          <a href="#footer">Terms</a>
          <a href="#footer">Sustainability</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
