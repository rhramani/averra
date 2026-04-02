import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Droplet, Heart, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pure groundnut oil extracted from premium quality peanuts',
  },
  {
    icon: Droplet,
    title: 'Cold Pressed',
    description: 'Traditional ghani method preserves natural nutrients and flavor',
  },
  {
    icon: Heart,
    title: 'Rich in Nutrients',
    description: 'Packed with vitamins, antioxidants, and healthy fats',
  },
  {
    icon: ShieldCheck,
    title: 'No Chemicals',
    description: 'Zero artificial additives, preservatives, or chemicals',
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5A3E2B] mb-4">
            Why Choose Averra?
          </h2>
          <p className="text-lg text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Discover the difference that pure, traditional oil makes in your cooking
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 border-transparent hover:border-[#F5C542] transition-all duration-300 h-full group hover:shadow-xl">
                <CardContent className="p-8 text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto bg-[#FFF8E7] rounded-2xl flex items-center justify-center group-hover:bg-[#F5C542] transition-colors"
                  >
                    <feature.icon className="h-8 w-8 text-[#5A3E2B]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#5A3E2B]">
                    {feature.title}
                  </h3>
                  <p className="text-[#5A3E2B]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
