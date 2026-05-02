import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, User } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const initialReviews: Review[] = [
  { id: 1, name: "Sarah M.", rating: 5, comment: "Very nice place, good service, very fast, and good price 🖤", date: "2024-12-15" },
  { id: 2, name: "Ahmed K.", rating: 5, comment: "Always positive atmosphere and well done work!", date: "2024-12-10" },
  { id: 3, name: "Lisa V.", rating: 5, comment: "Beste kapsalon in Eindhoven! Altijd tevreden met het resultaat. Echt een aanrader voor iedereen.", date: "2024-11-28" },
  { id: 4, name: "Mohamed R.", rating: 4, comment: "Snelle service, vriendelijk personeel en goede prijzen. Aanrader!", date: "2024-11-20" },
  { id: 5, name: "Emma J.", rating: 5, comment: "Geweldige ervaring! De kapper wist precies wat ik wilde en het resultaat is fantastisch.", date: "2024-11-15" },
  { id: 6, name: "Youssef B.", rating: 5, comment: "Altijd perfect! Kom hier al jaren en nooit teleurgesteld. Top team!", date: "2024-11-05" },
  { id: 7, name: "Fleur D.", rating: 4, comment: "Mooie salon, vriendelijk personeel en goede prijs-kwaliteit verhouding.", date: "2024-10-28" },
  { id: 8, name: "Karim H.", rating: 5, comment: "Snel, professioneel en altijd met een glimlach. Mijn vaste kapsalon!", date: "2024-10-20" },
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    
    const newReview: Review = {
      id: Date.now(),
      name: name.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split("T")[0],
    };
    
    setReviews([newReview, ...reviews]);
    setName("");
    setRating(5);
    setComment("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

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
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Reviews</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Klant <span className="gold-text">Reviews</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${star <= Math.round(Number(averageRating)) ? "text-gold fill-gold" : "text-gray-600"}`}
                  />
                ))}
              </div>
              <span className="text-white font-bold text-2xl">{averageRating}</span>
              <span className="text-gray-400">({reviews.length} reviews)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid + Form */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-4">
              {reviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-dark-light rounded-2xl p-6 border border-white/5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{review.name}</p>
                        <p className="text-gray-500 text-xs">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-4 h-4 ${j < review.rating ? "text-gold fill-gold" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{review.comment}&rdquo;</p>
                </motion.div>
              ))}
            </div>

            {/* Submit Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 h-fit"
            >
              <div className="bg-dark-light rounded-2xl p-8 border border-gold/10">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Schrijf een Review</h3>
                <p className="text-gray-400 text-sm mb-6">Deel uw ervaring met anderen</p>
                
                {submitted && (
                  <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                    Bedankt voor uw review! Deze is succesvol toegevoegd.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Uw Naam</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Beoordeling</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${star <= rating ? "text-gold fill-gold" : "text-gray-600"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Uw Ervaring</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-dark rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Vertel ons over uw ervaring..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 gold-gradient text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Review Versturen
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
