import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    title: 'AVERRA PREMIUM TIN',
    size: '15 Liters (13.65kg)',
    price: '₹3,290',
    popular: true,
    emoji: '🪔',
    image: '/product-1.webp'
  },
  {
    title: 'AVERRA ECONOMY CAN',
    size: '5 Liters (4.55kg)',
    price: '₹1,280',
    popular: false,
    emoji: '🏺',
    image: '/product-2.webp'
  },
  {
    title: 'AVERRA STARTER PACK',
    size: '1 Liter (910g)',
    price: '₹290',
    popular: false,
    emoji: '🧴',
    image: '/product-3.webp'
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
              <Card className="relative bg-[#FDF5E6] border-[#D2B48C] hover:border-[#F5C542] transition-all duration-300 h-full overflow-hidden group hover:shadow-2xl flex flex-col pt-8">
                {product.popular && (
                  <div className="absolute top-0 left-0 w-full bg-[#F5C542] text-[#5A3E2B] text-center py-2 font-bold text-sm uppercase tracking-wider z-20">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 text-center flex flex-col flex-grow">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-full h-[270px] mx-auto bg-transparent flex items-center justify-center overflow-hidden mb-8"
                  >
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="h-full object-contain" 
                      />
                    ) : (
                      <span className="text-8xl">{product.emoji}</span>
                    )}
                  </motion.div>

                  <div className="mb-6 min-h-[4rem] flex flex-col justify-center">
                    <h3 className="text-xl font-black text-[#5A3E2B] uppercase tracking-tight leading-tight">
                      {product.title}
                    </h3>
                    <div className="text-xs font-bold text-[#5A3E2B]/70 uppercase mt-2">
                      Size: {product.size}
                    </div>
                  </div>

                  <div className="mt-auto space-y-1">
                    <div className="text-4xl font-black text-[#008000] decoration-2 underline underline-offset-8">
                      {product.price}
                    </div>
                    <div className="text-[10px] font-bold text-[#5A3E2B]/60 uppercase pt-4 tracking-widest">
                      INCLUSIVE OF ALL TAX
                    </div>
                  </div>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
