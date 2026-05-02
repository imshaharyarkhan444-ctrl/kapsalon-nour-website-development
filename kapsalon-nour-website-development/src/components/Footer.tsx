import { Link } from "react-router-dom";
import { Scissors, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-light border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                <Scissors className="w-5 h-5 text-dark" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                KAPSALON <span className="gold-text">NOUR</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professionele kapsalon in Eindhoven. Snel, vriendelijk en betaalbaar. 
              Voor dames en heren. Met of zonder afspraak.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">Snelle Links</h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "Over Ons" },
                { path: "/services", label: "Diensten" },
                { path: "/pricing", label: "Prijzen" },
                { path: "/reviews", label: "Reviews" },
                { path: "/booking", label: "Afspraak Maken" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Stratumsedijk 23D<br />
                  5611 NA Eindhoven
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+31614357563" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  +31 6 14 35 75 63
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@kapsalon-nour.nl" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  info@kapsalon-nour.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">Openingstijden</h3>
            <ul className="space-y-2">
              {[
                { day: "Maandag", hours: "10:00 - 19:00" },
                { day: "Dinsdag", hours: "10:00 - 19:00" },
                { day: "Woensdag", hours: "10:00 - 19:00" },
                { day: "Donderdag", hours: "10:00 - 19:00" },
                { day: "Vrijdag", hours: "10:00 - 20:00" },
                { day: "Zaterdag", hours: "10:00 - 19:00" },
                { day: "Zondag", hours: "12:00 - 18:00" },
              ].map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-gray-400">{item.day}</span>
                  <span className="text-gold">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kapsalon NOUR. Alle rechten voorbehouden.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-dark hover:shadow-lg hover:shadow-gold/20 transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
