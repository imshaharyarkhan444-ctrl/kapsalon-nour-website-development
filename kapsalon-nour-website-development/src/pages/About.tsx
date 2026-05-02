import { motion } from "framer-motion";
import { Heart, Zap, DollarSign, Award, Coffee, Accessibility, Baby, CreditCard } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Vriendelijke Omgeving",
    desc: "Bij Kapsalon NOUR voelt u zich direct thuis. Onze warme en gastvrije sfeer maakt elke bezoek aangenaam.",
  },
  {
    icon: Zap,
    title: "Snelle Service",
    desc: "Geen lange wachttijden. Onze ervaren kappers werken efficiënt zonder in te boeten op kwaliteit.",
  },
  {
    icon: DollarSign,
    title: "Betaalbare Prijzen",
    desc: "Professionele kwaliteit tegen eerlijke prijzen. Luxe hoeft niet duur te zijn.",
  },
  {
    icon: Award,
    title: "Ervaren Kappers",
    desc: "Ons team bestaat uit geschoolde professionals met jarenlange ervaring in de kapperswereld.",
  },
  {
    icon: Coffee,
    title: "Gezellige Atmosfeer",
    desc: "Geniet van een kopje koffie terwijl u wacht. Ontspan in onze comfortabele zitruimte.",
  },
  {
    icon: Accessibility,
    title: "Rolstoeltoegankelijk",
    desc: "Onze salon is volledig toegankelijk voor iedereen, inclusief rolstoelgebruikers.",
  },
];

const extras = [
  { icon: Accessibility, label: "Rolstoeltoegankelijk" },
  { icon: Coffee, label: "Toilet aanwezig" },
  { icon: Baby, label: "Kindvriendelijk" },
  { icon: CreditCard, label: "PIN / NFC Betaling" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-dark-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Over Ons</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Kapsalon <span className="gold-text">NOUR</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Al meer dan 10 jaar dé vertrouwde kapsalon in Eindhoven voor dames en heren. 
              Snel, vriendelijk en altijd met een glimlach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/storefront.jpg"
                alt="Kapsalon NOUR pand"
                className="rounded-2xl shadow-2xl shadow-black/30 w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl font-bold text-white mb-6">
                Onze <span className="gold-text">Geschiedenis</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Kapsalon NOUR is opgericht met een duidelijke missie: iedereen een professionele 
                en betaalbare kapperservaring bieden. Gelegen in het hart van Eindhoven, 
                zijn wij uitgegroeid tot een begrip in de stad.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Wat begon als een kleine salon is nu een volwaardige kapsalon waar klanten 
                van alle leeftijden en achtergronden welkom zijn. Onze multiculturele benadering 
                maakt ons uniek - wij begrijpen dat iedereen zijn eigen stijl heeft.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Bij Kapsalon NOUR draait alles om kwaliteit, snelheid en klanttevredenheid. 
                Of u nu komt voor een simpele knipbeurt of een complete transformatie, 
                wij zorgen ervoor dat u tevreden de deur uitloopt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Waarom Wij</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-3">
              Waarom Kapsalon <span className="gold-text">NOUR</span>?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-dark rounded-2xl p-8 border border-white/5 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Info */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Extra Informatie</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-3">
              Alles Wat U Moet <span className="gold-text">Weten</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((extra, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-dark-light rounded-2xl p-6 text-center border border-white/5"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <extra.icon className="w-7 h-7 text-gold" />
                </div>
                <p className="text-white font-semibold">{extra.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-dark-light rounded-2xl p-8 border border-gold/10 text-center"
          >
            <p className="text-gray-300 text-lg">
              <span className="text-gold font-semibold">Belangrijk:</span> Knippen kan met of zonder afspraak. 
              Een afspraak aanbevolen voor drukke momenten.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
