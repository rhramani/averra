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
              The Averra journey began with a simple observation: modern kitchens were missing the 
              true, authentic flavor of tradition. Inspired by the "Original Goodness" of childhood meals, 
              we set out on a mission to bring back the purity of oil, just as nature intended.
            </p>
            <p>
              Founded with the philosophy of "Returning to Original Goodness," we focus on three 
              core values: <strong>Purity, Naturality, and Originality</strong>. We believe that 
              healthy living starts with what goes into your pan, and our goal is to ensure 
              every Indian household has access to 100% pure Ghani oil.
            </p>
            <p>
              Every drop of Averra oil is a testament to our roots in Gujarat, where we source 
              exclusive G20 variety groundnuts. We don't just produce oil; we preserve a 
              legacy of health and taste that has been passed down through generations.
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
