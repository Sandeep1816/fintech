import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Global Fintech Fest</h3>
            <p className="text-primary-foreground/80 mb-4">
              Global&apos;s Premier Banking & Fintech Summit
              <br />
              20 – 21 August 2025, Johannesburg, South Global
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/attend"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Attend
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsor"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/agenda"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="/speakers"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/book-now"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/download-brochure"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Download Brochure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-primary-foreground/80">
              <p>Johannesburg, South Global</p>
              <p className="mt-2">
                <a href="mailto:info@Globalfintechfest.com" className="hover:text-primary-foreground transition-colors">
                proptechsales@maxpo.ae
                </a>
              </p>
              {/* <p className="mt-1">
                <a href="tel:+27123456789" className="hover:text-primary-foreground transition-colors">
                  +27 12 345 6789
                </a>
              </p> */}
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Global Fintech Fest & Awards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

