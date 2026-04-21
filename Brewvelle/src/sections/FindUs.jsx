import InfoCard from '../components/cards/InfoCard'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'

const details = [
  { title: 'Address', text: '214 Cedar Lane, Downtown District, Brewvelle City' },
  { title: 'Hours', text: 'Mon-Sun: 7:00 AM - 9:00 PM' },
  { title: 'Contact', text: '(555) 014-0287 • hello@brewvelle.com' },
]

function FindUs() {
  return (
    <section className="section" id="find-us">
      <Container>
        <SectionTitle
          eyebrow="Drop by"
          title="A cozy corner for your morning rush or evening reset."
          description="Swap in your real location, map embed, or booking form whenever you are ready."
        />
        <div className="grid grid--three">
          {details.map((detail) => (
            <InfoCard key={detail.title} title={detail.title} text={detail.text} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FindUs
