import { motion } from "framer-motion";
import { Scissors, Sparkles, Info } from "lucide-react";

const damesServices = [
  { name: "Knippen, wassen & stylen", price: "€30,00" },
  { name: "Stylen", price: "€25,00" },
  { name: "Epileren hele gezicht", price: "€15,00" },
  { name: "Epileren wenkbrauwen", price: "€10,00" },
  { name: "Verven kort haar", price: "€25,00" },
  { name: "Verven lang haar", price: "€40,00" },
  { name: "Highlights / Lowlights (15 folie)", price: "€25,00" },
  { name: "Highlights / Lowlights (30 folie)", price: "€40,00" },
];

const herenServices = [
  { name: "Knippen", price: "€20,00" },
  { name: "Knippen t/m 12 jaar", price: "€17,00" },
  { name: "Knippen, wassen, drogen & stylen", price: "€25,00" },
  { name: "Wassen, drogen & stylen", price: "€8,00" },
  { name: "Baard scheren / bijwerken", price: "€15,00" },
  { name: "Epileren", price: "€5,00" },
  { name: "Haar verven", price: "€30,00" },
  { name: "Gezicht reinigen & masker", price: "Vanaf €18,00" },
];

export default function Pricing() {
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
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Prijzen</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Onze <span className="gold-text">Prijzen</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Transparante prijzen voor alle behandelingen. Geen verborgen kosten, gewoon eerlijke tarieven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dames */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-dark-light rounded-3xl p-8 md:p-10 border border-gold/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-white">Dames</h2>
                  <p className="text-gray-400 text-sm">Alle damesbehandelingen</p>
                </div>
              </div>
              <div className="space-y-1">
                {damesServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center justify-between py-4 border-b border-white/5 group hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                    <span className="text-gold font-bold font-heading text-lg">{service.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Heren */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-dark-light rounded-3xl p-8 md:p-10 border border-gold/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                  <Scissors className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-white">Heren</h2>
                  <p className="text-gray-400 text-sm">Alle herenbehandelingen</p>
                </div>
              </div>
              <div className="space-y-1">
                {herenServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center justify-between py-4 border-b border-white/5 group hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                    <span className="text-gold font-bold font-heading text-lg">{service.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gold/5 rounded-2xl p-8 border border-gold/10 flex items-start gap-4"
          >
            <Info className="w-6 h-6 text-gold shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">Belangrijke Informatie</h3>
              <p className="text-gray-400">
                Knippen kan <span className="text-gold font-semibold">met en zonder afspraak</span>. 
                Voor kleurbehandelingen en speciale verzoeken raden wij aan van tevoren te reserveren. 
                Alle prijzen zijn inclusief BTW. Betaling kan contant, met pin of NFC.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
