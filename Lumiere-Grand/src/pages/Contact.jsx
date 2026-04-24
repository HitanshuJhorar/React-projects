import Container from "../components/ui/Container";
import ArrivalInfo from "../features/contact/ArrivalInfo";
import ContactHero from "../features/contact/ContactHero";
import ContactInfo from "../features/contact/ContactInfo";
import CTASection from "../features/contact/CTASection";
import FAQ from "../features/contact/FAQ";
import ReservationForm from "../features/contact/ReservationForm";
import Services from "../features/contact/Services";
import Testimonials from "../features/contact/Testimonials";

export default function Contact() {
  return (
    <div className="overflow-hidden bg-[#F8F6F3]">
      <ContactHero />

      <section className="px-4 py-12 md:px-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ReservationForm />
            <ContactInfo />
          </div>
        </Container>
      </section>

      <Services />
      <FAQ />
      <Testimonials />
      <ArrivalInfo />
      <CTASection />
    </div>
  );
}
