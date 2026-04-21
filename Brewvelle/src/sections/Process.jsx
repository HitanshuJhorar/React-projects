import InfoCard from '../components/cards/InfoCard'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'

const steps = [
  {
    title: 'Sourcing',
    text: 'Ethically sourced beans from single-origin farms.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAk0xnt-Pj5ePxEG97tCjgNYJ8JE5y6hAaW85hNcuMR8Ds6yyCelHnwQlubFhhTaWXhSGKbNjfg0eZd_eJqXSXhaH-j42tAXBwK5FUsmTUU74A83Dd1gvQ67mHDwjepETTO7xOwzAKj51QCL6kq8iNv-zb9M0EGJ-Gnb6tp3s7prCBkImg8OxlieFDAbFdbffVZkcJ9A80aY2SvCh8SR8nCrJl673KCqb5nR5JiPcx2RLAJ2U-b0maRiSzdMVEETglIM73W2ZS-Gwg',
  },
  {
    title: 'Roasting',
    text: 'Small-batch roasting for peak flavor profile.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAoccR3cAeyM7eHumNFGt1eS62pap4wkisXzwNX_VYnKFXWe8XPeHynPiLfbxHtNOutariI3uWsRuTmu4UtM37CMthCBWJ1rQ3bWBM6RBNwOfv0xn9QIeQBuRjZTu0Lk5NsPp5D7hf8_ifjte4CO_s7yyCFLIin3aydXjf1s2rZWBp04I6tKSXWHaj7Fhvon2iourhOSRJW-lXTiPZEnv6rNYx4U-z39AXKRZR7cEp1I-K2F9dZp8R-IcvpJZyDjAxi5662NSR41U',
  },
  {
    title: 'Brewing',
    text: 'Precision brewing for the perfect cup.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqVYaNU_w1Y7MEtIBmxk4PydIbo7LDQzsB1OANdmplOp9gI0TkBMYnHYeLvbdLEdhM8omzQSbyq09l6Rvw-bKFrMsgjMd6HukAsZzhxLQuBNgmaqn7wzL6gdfFZWIOn5FbCCCygLNyftu9NYZ2CnqR4jZ5AiHfRM_1Qr9RpYolXuEqY1irhFo1KomMM3fMzarF94WHQuU-NRlMHtc1eYGB3zze8WUk0umqeD4oaG3WuSvYWj18tCJuHFrmqVvk3aqGSog_dhUoR5I',
  },
]

function Process() {
  return (
    <section className="section" id="process">
      <Container className="panel panel--process">
        <SectionTitle title="Our Process" align="center" />
        <div className="process-grid">
          {steps.map((step) => (
            <InfoCard
              key={step.title}
              title={step.title}
              text={step.text}
              image={step.image}
              className="process-card"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process
