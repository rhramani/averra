import { motion } from 'framer-motion';
import { Award, Users, Factory, Target } from 'lucide-react';

const stats = [
  { icon: Award, value: '20+', label: 'Years Experience' },
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Factory, value: '100%', label: 'Traditional Method' },
  { icon: Target, value: '₹0', label: 'Zero Chemicals' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#5A3E2B] to-[#3E2A1D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Averra Story
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-white/90">
            <p>
              At Averra, we believe in preserving the ancient art of oil extraction.
              Our journey began with a simple mission: to bring back the authentic taste
              and health benefits of traditional ghani-pressed groundnut oil.
            </p>
            <p>
              We follow the time-honored ghani method, where groundnuts are slowly
              crushed using wooden churners. This cold-press process ensures that the
              oil retains all its natural nutrients, flavor, and aroma without any
              chemical intervention.
            </p>
            <p>
              Every drop of Averra oil tells a story of purity, tradition, and
              unwavering commitment to quality. We source only the finest groundnuts
              from trusted farmers and process them with care to deliver nature's best
              to your kitchen.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto bg-[#F5C542] rounded-2xl flex items-center justify-center"
              >
                <stat.icon className="h-8 w-8 text-[#5A3E2B]" />
              </motion.div>
              <div className="text-4xl font-bold text-[#F5C542]">
                {stat.value}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
