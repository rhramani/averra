import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Heart Healthy',
    description: 'Rich in monounsaturated fats that support cardiovascular health',
  },
  {
    icon: Shield,
    title: 'Boosts Immunity',
    description: 'Contains antioxidants and vitamin E to strengthen your immune system',
  },
  {
    icon: Sparkles,
    title: 'Rich Taste',
    description: 'Authentic nutty flavor that enhances every dish',
  },
  {
    icon: Leaf,
    title: 'Traditional Process',
    description: 'Time-tested ghani method preserves natural goodness',
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-[#F5C542] to-[#E0B438] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="text-9xl"
                >
                  🥜
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center"
            >
              <span className="text-7xl">🌿</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#5A3E2B] mb-4">
                Health Benefits
              </h2>
              <p className="text-lg text-[#5A3E2B]/70 leading-relaxed">
                Discover why Averra groundnut oil is the perfect choice for your family's health and wellness
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-[#FFF8E7] hover:bg-[#F5C542]/20 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F5C542] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-6 w-6 text-[#5A3E2B]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#5A3E2B] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#5A3E2B]/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
