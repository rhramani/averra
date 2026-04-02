import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    title: 'Premium Tin',
    size: '15 Liters',
    price: '₹2,499',
    popular: true,
    emoji: '🪔',
  },
  {
    title: 'Family Pack',
    size: '5 Liters',
    price: '₹899',
    popular: false,
    emoji: '🏺',
  },
  {
    title: 'Starter Pack',
    size: '1 Liter',
    price: '₹199',
    popular: false,
    emoji: '🧴',
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-[#FFF8E7] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5A3E2B] mb-4">
            Our Products
          </h2>
          <p className="text-lg text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Choose the perfect size for your family's cooking needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="border-2 border-[#F5C542]/20 hover:border-[#F5C542] transition-all duration-300 h-full overflow-hidden group hover:shadow-2xl">
                {product.popular && (
                  <div className="bg-[#F5C542] text-[#5A3E2B] text-center py-2 font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-32 h-32 mx-auto bg-gradient-to-br from-[#F5C542] to-[#E0B438] rounded-3xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-6xl">{product.emoji}</span>
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#5A3E2B] mb-2">
                      {product.title}
                    </h3>
                    <Badge variant="outline" className="border-[#5A3E2B] text-[#5A3E2B]">
                      {product.size}
                    </Badge>
                  </div>

                  <div className="text-4xl font-bold text-[#F5C542]">
                    {product.price}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-[#5A3E2B] hover:bg-[#5A3E2B]/90 text-white font-semibold group-hover:bg-[#F5C542] group-hover:text-[#5A3E2B] transition-colors">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
