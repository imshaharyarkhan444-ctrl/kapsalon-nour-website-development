import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle, Check } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const timeSlots = [
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  ];

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
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Afspraak</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Boek Uw <span className="gold-text">Afspraak</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Kies de manier die u het beste uitkomt. Bel, app of vul het formulier in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-dark-light rounded-2xl p-8 border border-gold/10">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+31614357563"
                    className="flex items-center gap-4 p-4 bg-dark rounded-xl border border-white/5 hover:border-gold/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Bel ons direct</p>
                      <p className="text-white font-semibold text-lg">+31 6 14 35 75 63</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/31614357563"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-dark rounded-xl border border-white/5 hover:border-gold/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">WhatsApp</p>
                      <p className="text-white font-semibold text-lg">+31 6 14 35 75 63</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-dark-light rounded-2xl p-8 border border-gold/10">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Openingstijden</h2>
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
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-dark-light rounded-2xl p-8 border border-gold/10">
                <h2 className="font-heading text-2xl font-bold text-white mb-2">Online Afspraak</h2>
                <p className="text-gray-400 text-sm mb-6">Vul het formulier in en wij nemen contact met u op</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">Afspraak Verzonden!</h3>
                    <p className="text-gray-400">Wij nemen zo snel mogelijk contact met u op om de afspraak te bevestigen.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Naam</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Telefoonnummer</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                        placeholder="+31 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Dienst</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Kies een dienst</option>
                        <option value="heren">Heren Knippen</option>
                        <option value="dames">Dames Knippen</option>
                        <option value="kleuren">Kleuren / Highlights</option>
                        <option value="baard">Baard Styling</option>
                        <option value="kinderen">Kinder Knippen</option>
                        <option value="overig">Overig</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">Datum</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white focus:border-gold focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">Tijd</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Kies tijd</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Opmerkingen (optioneel)</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Speciale verzoeken of opmerkingen..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 gold-gradient text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all text-lg"
                    >
                      <Calendar className="w-5 h-5" />
                      Afspraak Aanvragen
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
