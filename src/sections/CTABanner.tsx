import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#F5C542] via-[#E0B438] to-[#F5C542] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5A3E2B]">
            Switch to Pure Oil Today
          </h2>
          <p className="text-xl text-[#5A3E2B]/80 max-w-2xl mx-auto">
            Experience the difference of traditional, chemical-free groundnut oil.
            Your family deserves the best!
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#5A3E2B] hover:bg-[#5A3E2B]/90 text-white font-semibold text-lg px-8 py-6"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#5A3E2B] text-[#5A3E2B] bg-white hover:bg-[#5A3E2B] hover:text-white font-semibold text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us: 1800-123-4567
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-[#5A3E2B]">
            <div className="text-center">
              <div className="text-3xl font-bold">Free Delivery</div>
              <div className="text-sm opacity-80">On orders above ₹999</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100% Pure</div>
              <div className="text-sm opacity-80">Quality Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Fast Shipping</div>
              <div className="text-sm opacity-80">Delivered in 3-5 days</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
