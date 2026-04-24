import Container from "../ui/Container";
import Input from "../ui/Input";

export default function Footer() {
  return (
    <footer className="border-t border-[#ECE4DE] bg-[#FBF8F5] py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <img
              src="/images/Brand-logo-img.png"
              alt="Lumiere Grand"
              className="h-14 w-auto brightness-0"
            />
            <p className="mt-5 max-w-[240px] text-[14px] leading-[1.8] text-[#6B6B6B]">
              Timeless luxury. Unforgettable stays.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#1A1A1A]">Quick Links</h3>
            <div className="mt-4 space-y-2 text-[14px] text-[#6B6B6B]">
              <p>Rooms</p>
              <p>Amenities</p>
              <p>About Us</p>
              <p>Gallery</p>
              <p>Testimonials</p>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#1A1A1A]">Support</h3>
            <div className="mt-4 space-y-2 text-[14px] text-[#6B6B6B]">
              <p>FAQs</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#1A1A1A]">Newsletter</h3>
            <p className="mt-4 text-[14px] leading-[1.8] text-[#6B6B6B]">
              Subscribe for exclusive offers and updates.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Input placeholder="Enter your email" />
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-[#B76E79] text-white transition hover:bg-[#a35e68]"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#ECE4DE] pt-6 text-[13px] text-[#8A8A8A] md:flex-row md:items-center md:justify-between">
          <p>Copyright 2024 Lumiere Hospitality Group. All rights reserved.</p>
          <div className="flex items-center gap-5 text-[14px] font-medium uppercase tracking-[0.14em] text-[#5F5F5F]">
            <span>Ig</span>
            <span>Fb</span>
            <span>X</span>
            <span>Pt</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
