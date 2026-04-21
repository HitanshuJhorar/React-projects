import InfoCard from '../components/cards/InfoCard'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'

const steps = [
  {
    title: 'Source',
    text: 'We partner with roasters who can trace every bean back to thoughtful farms.',
  },
  {
    title: 'Brew',
    text: 'Each cup is dialed in for balance, sweetness, and a finish that lingers softly.',
  },
  {
    title: 'Serve',
    text: 'From ceramic mugs to takeaway cups, everything is designed to feel intentional.',
  },
]

function Process() {
  return (
    <section className="section" id="process">
      <Container>
        <SectionTitle
          eyebrow="Our approach"
          title="From bean to cup, every step stays personal."
          description="A simple process built around quality, warmth, and consistency."
        />
        <div className="grid grid--three">
          {steps.map((step) => (
            <InfoCard key={step.title} title={step.title} text={step.text} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process
