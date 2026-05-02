import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Baby, User, Crown } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Heren Knippen",
    desc: "Van klassieke herenkapsels tot de nieuwste trends. Onze ervaren barbers zorgen voor de perfecte look die bij uw stijl past.",
    features: ["Consultatie inbegrepen", "Wassen optioneel", "Styling advies"],
  },
  {
    icon: Crown,
    title: "Baard Styling",
    desc: "Professionele baardverzorging met precisie. Van een nette trim tot een volledige scheerbeurt met warme handdoek.",
    features: ["Precisie trimmen", "Scheerbeurt", "Baardverzorging producten"],
  },
  {
    icon: Palette,
    title: "Haar Kleuren",
    desc: "Volledige kleurbehandelingen voor dames en heren. Van natuurlijke tinten tot gedurfde kleuren, wij realiseren uw wens.",
    features: ["Volledige kleuring", "Highlights & Lowlights", "Kleurcorrectie"],
  },
  {
    icon: Sparkles,
    title: "Grooming",
    desc: "Complete verzorging voor de moderne man. Gezichtsreiniging, maskers en meer voor een verzorgde uitstraling.",
    features: ["Gezichtsreiniging", "Masker behandeling", "Wenkbrauwen epileren"],
  },
  {
    icon: Scissors,
    title: "Dames Knippen",
    desc: "Stijlvolle dameskapsels met persoonlijk advies. Of u nu wilt knippen, stylen of een complete make-over wilt.",
    features: ["Knippen & stylen", "Wassen & föhnen", "Persoonlijk advies"],
  },
  {
    icon: Baby,
    title: "Kinder Knippen",
    desc: "Geduldige en vriendelijke service voor de kleintjes. Wij maken van elk kinderkapsel een leuke ervaring.",
    features: ["Geduldige aanpak", "Leuke kinderstoel", "Snelle service"],
  },
];

export default function Services() {
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
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Diensten</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Onze <span className="gold-text">Diensten</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Van een simpele knipbeurt tot complete verzorging. Ontdek wat Kapsalon NOUR voor u kan betekenen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-dark-light rounded-2xl p-8 border border-white/5 card-hover group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Hoe Het Werkt</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-3">
              Uw Bezoek in <span className="gold-text">3 Stappen</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Afspraak Maken",
                desc: "Bel ons of kom langs. Met of zonder afspraak, wij staan voor u klaar.",
              },
              {
                step: "02",
                title: "Consultatie",
                desc: "Onze kapper bespreekt uw wensen en geeft professioneel advies.",
              },
              {
                step: "03",
                title: "Geniet van het Resultaat",
                desc: "Loop tevreden de deur uit met uw nieuwe look.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-2xl font-bold text-dark">{item.step}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
