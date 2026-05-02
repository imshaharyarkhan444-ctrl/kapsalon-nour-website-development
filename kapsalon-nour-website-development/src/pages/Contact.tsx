import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Clock, Accessibility, Baby, CreditCard } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-dark-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Contact</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Neem <span className="gold-text">Contact</span> Op
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Heeft u vragen of wilt u een afspraak maken? Wij staan voor u klaar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: "Adres",
                lines: ["Stratumsedijk 23D", "5611 NA Eindhoven"],
                href: "https://maps.google.com/?q=Stratumsedijk+23D+Eindhoven",
              },
              {
                icon: Phone,
                title: "Telefoon",
                lines: ["+31 6 14 35 75 63"],
                href: "tel:+31614357563",
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@kapsalon-nour.nl"],
                href: "mailto:info@kapsalon-nour.nl",
              },
              {
                icon: Globe,
                title: "Website",
                lines: ["www.kapsalon-nour.nl"],
                href: "https://www.kapsalon-nour.nl",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-dark-light rounded-2xl p-8 border border-white/5 text-center card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-gray-400 text-sm">{line}</p>
                ))}
              </motion.a>
            ))}
          </div>

          {/* Map + Info */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-dark-light rounded-2xl overflow-hidden border border-white/5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.1234567890123!2d5.4778!3d51.4416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzI5LjgiTiA1wrAyOCczOS45IkU!5e0!3m2!1snl!2snl!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kapsalon NOUR Locatie"
                className="w-full"
              />
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="bg-dark-light rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-gold" />
                  <h3 className="font-heading text-xl font-bold text-white">Openingstijden</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Maandag", hours: "10:00 - 19:00" },
                    { day: "Dinsdag", hours: "10:00 - 19:00" },
                    { day: "Woensdag", hours: "10:00 - 19:00" },
                    { day: "Donderdag", hours: "10:00 - 19:00" },
                    { day: "Vrijdag", hours: "10:00 - 20:00" },
                    { day: "Zaterdag", hours: "10:00 - 19:00" },
                    { day: "Zondag", hours: "12:00 - 18:00" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-gray-400">{item.day}</span>
                      <span className="text-gold font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark-light rounded-2xl p-8 border border-white/5">
                <h3 className="font-heading text-xl font-bold text-white mb-6">Faciliteiten</h3>
                <div className="space-y-4">
                  {[
                    { icon: Accessibility, label: "Rolstoeltoegankelijk" },
                    { icon: Clock, label: "Toilet aanwezig" },
                    { icon: Baby, label: "Kindvriendelijk" },
                    { icon: CreditCard, label: "PIN / NFC / Credit Card" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
