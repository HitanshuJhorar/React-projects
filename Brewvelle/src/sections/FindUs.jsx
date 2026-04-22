import InfoCard from '../components/cards/InfoCard'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import useReveal from '../hooks/useReveal'

const details = [
  {
    title: 'Brewvelle',
    text: '123 Artisan Ave, Suite 100 Portland, OR 97204',
    meta: 'location_on',
  },
  {
    title: 'Opening Hours',
    text: 'Mon - Fri: 7:00 AM - 4:00 PM Sat - Sun: 8:00 AM - 5:00 PM',
    meta: 'schedule',
  },
  {
    title: 'Get in Touch',
    text: 'hello@brewvelle.com (555) 123-4567',
    meta: 'mail',
  },
]

function FindUs() {
  const revealRef = useReveal()
  return (
    <section className="section" id="find-us" ref={revealRef}>
      <Container className="find-us-layout">
        <div className="find-us-copy">
          <div className="reveal-fade" style={{'--delay': '0ms'}}>
            <h2 className="find-us-title">Find Us</h2>
          </div>
          <div className="find-us-list">
            {details.map((detail, i) => (
              <div className="reveal-fade" style={{'--delay': `${i * 100 + 120}ms`}} key={detail.title}>
                <InfoCard
                  title={detail.title}
                  text={detail.text}
                  meta={detail.meta}
                  className="location-card"
                />
              </div>
            ))}
          </div>
          <div className="reveal-fade" style={{'--delay': '450ms'}}>
            <Button href="#find-us" size="sm">
              Get Directions
            </Button>
          </div>
        </div>
        <div className="map-frame reveal-fade" style={{'--delay': '200ms'}}>
          <img
            alt="Minimalist street map of Portland"
            className="map-frame__image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrF6bWFmlIebejK-ZcRsAlGq0QX9BbbKGIdxD1BYhUBfgsCRCaDKbprFVUwkVnw66KdU4QuAacpN4pbbtdlELucZQHX9zwYtshSOlugzyn4MbNkifrWxracWokn8TgN48GeXEA5drYCeLtonuxkCIMWziG0JQHqHXujeAsvNVWSHhcLkQJMFzchNYUerEz8iHxlCN0v7YgU8vKSR8nxzBXQ_jiYx7gHEPHG2xM2OGFYjsux3GsOONlO-WtSST92FNuXqWtPv3nW8E"
          />
          <div className="map-frame__overlay"></div>
          <span className="map-pin"></span>
        </div>
      </Container>
    </section>
  )
}

export default FindUs
