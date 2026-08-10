import { Mail, Phone, MapPin } from "lucide-react";

const BOOKING_URL = "https://book.myuhandisitutors.co.za/";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/Original_Logo.jpeg"
                alt="Uhandisi Tutors"
                className="h-14 w-auto rounded-full"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Where Learning Meets Excellence. Expert tutoring in Maths, Science &
              Engineering for high school and university students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Subjects", href: "#subjects" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  Booking Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>uhandisitutors@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+27 78 710 2557</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/50">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@uhandisitutors?_r=1&_t=ZS-97h03mHeen7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 hover:text-accent hover:border-accent/40 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.83 1.55V6.78a4.85 4.85 0 0 1-1.06-.09z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-primary-foreground/30 mt-6">
              Follow us on TikTok for study tips, updates, and more.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Uhandisi Tutors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
