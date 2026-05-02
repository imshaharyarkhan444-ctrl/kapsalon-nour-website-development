import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Scissors, Star, Clock, Users, ChevronRight, Phone, Calendar, MapPin } from "lucide-react";

const services = [
  { icon: Scissors, title: "Heren Knippen", desc: "Professionele herenkapsels van klassiek tot modern", price: "€20,00" },
  { icon: Users, title: "Dames Knippen", desc: "Stijlvolle dameskapsels met persoonlijk advies", price: "€30,00" },
  { icon: Star, title: "Kleuren & Highlights", desc: "Volledige kleurbehandelingen en highlights", price: "Vanaf €25,00" },
  { icon: Clock, title: "Baard Verzorging", desc: "Precisie baard scheren en bijwerken", price: "€15,00" },
];

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Very nice place, good service, very fast, and good price 🖤" },
  { name: "Ahmed K.", rating: 5, text: "Always positive atmosphere and well done work!" },
  { name: "Lisa V.", rating: 5, text: "Beste kapsalon in Eindhoven! Altijd tevreden met het resultaat." },
  { name: "Mohamed R.", rating: 4, text: "Snelle service, vriendelijk personeel en goede prijzen. Aanrader!" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-salon.jpg"
            alt="Kapsalon NOUR interieur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold text-sm font-medium">4.7 ★ (131 reviews)</span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              KAPSALON <span className="gold-text">NOUR</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
              Fast, Friendly & Professional Haircuts in Eindhoven
            </p>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Professionele kapsalon voor dames en heren. Snel, vriendelijk en betaalbaar. 
              Met of zonder afspraak.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="flex items-center gap-2 px-8 py-4 gold-gradient text-dark font-bold rounded-full hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Afspraak Maken
              </Link>
              <a
                href="tel:+31614357563"
                className="flex items-center gap-2 px-8 py-4 border-2 border-gold/50 text-gold font-semibold rounded-full hover:bg-gold/10 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5" />
                Bel Nu
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Clock, label: "Snelle Service", value: "< 30 min" },
              { icon: Star, label: "Beoordeling", value: "4.7 / 5" },
              { icon: Users, label: "Tevreden Klanten", value: "1000+" },
              { icon: MapPin, label: "Locatie", value: "Eindhoven" },
            ].map((stat, i) => (
              <div key={i} className="bg-dark/50 backdrop-blur-sm rounded-2xl p-4 border border-white/5">
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-white font-bold text-lg">{stat.value}</p>
                <p className="text-gray-400 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="/images/about-atmosphere.jpg"
                  alt="Kapsalon NOUR sfeer"
                  className="rounded-2xl shadow-2xl shadow-black/30 w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-dark-light rounded-2xl p-6 border border-gold/20 shadow-xl">
                  <p className="font-heading text-3xl font-bold gold-text">10+</p>
                  <p className="text-gray-400 text-sm">Jaar Ervaring</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Over Ons</span>
              <h2 className="font-heading text-4xl font-bold text-white mt-3 mb-6">
                Uw Vertrouwde Kapsalon in <span className="gold-text">Eindhoven</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Kapsalon NOUR is dé plek in Eindhoven waar stijl en vakmanschap samenkomen. 
                Ons team van ervaren kappers staat klaar om u te voorzien van de perfecte look, 
                of u nu komt voor een snelle knipbeurt of een complete make-over.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vriendelijke en professionele service",
                  "Snelle behandeling zonder wachttijd",
                  "Betaalbare prijzen voor iedereen",
                  "Ervaren kappers met oog voor detail",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
              >
                Lees Meer <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Onze Diensten</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-3">
              Wat Wij <span className="gold-text">Aanbieden</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-dark rounded-2xl p-8 border border-white/5 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <p className="text-gold font-bold">{service.price}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/50 text-gold font-semibold rounded-full hover:bg-gold/10 transition-all"
            >
              Bekijk Alle Diensten <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Reviews</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-3">
              Wat Klanten <span className="gold-text">Zeggen</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= 4.7 ? "text-gold fill-gold" : "text-gray-600"}`}
                  />
                ))}
              </div>
              <span className="text-white font-bold">4.7</span>
              <span className="text-gray-400">(131 reviews)</span>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-dark-light rounded-2xl p-6 border border-white/5"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="text-gold font-semibold text-sm">{review.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/50 text-gold font-semibold rounded-full hover:bg-gold/10 transition-all"
            >
              Bekijk Alle Reviews <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-dark-light rounded-3xl p-12 md:p-16 text-center border border-gold/10"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Boek Uw <span className="gold-text">Afspraak</span> Vandaag
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Wacht niet langer! Maak nu een afspraak en ervaar de professionele service van Kapsalon NOUR. 
              Met of zonder afspraak, wij staan voor u klaar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="flex items-center gap-2 px-8 py-4 gold-gradient text-dark font-bold rounded-full hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Afspraak Maken
              </Link>
              <a
                href="tel:+31614357563"
                className="flex items-center gap-2 px-8 py-4 border-2 border-gold/50 text-gold font-semibold rounded-full hover:bg-gold/10 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5" />
                +31 6 14 35 75 63
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
