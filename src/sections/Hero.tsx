import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#FFF8E7] to-white overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5C542] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5C542] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-[#F5C542]/20 text-[#5A3E2B] border-[#F5C542] mb-4">
                <Sparkles className="mr-1 h-3 w-3" />
                Premium Quality
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#5A3E2B] leading-tight"
            >
              Pure Traditional{' '}
              <span className="text-[#F5C542]">Ghani</span> Groundnut Oil
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#5A3E2B]/70 leading-relaxed"
            >
              Experience the authentic taste of tradition with our 100% natural,
              chemical-free, cold-pressed groundnut oil
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F5C542] rounded-full"></div>
                <span className="text-[#5A3E2B]">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F5C542] rounded-full"></div>
                <span className="text-[#5A3E2B]">Chemical-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F5C542] rounded-full"></div>
                <span className="text-[#5A3E2B]">Cold Pressed</span>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-[#F5C542] hover:bg-[#E0B438] text-[#5A3E2B] font-semibold text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#5A3E2B] text-[#5A3E2B] hover:bg-[#5A3E2B] hover:text-white text-lg px-8">
                Learn More
              </Button>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-[#F5C542] to-[#E0B438] rounded-[2rem] p-3 shadow-2xl">
                <div className="aspect-square overflow-hidden rounded-[1.5rem] bg-white">
                  <img 
                    src="/hero-image.jpeg" 
                    alt="Averra Pure Groundnut Oil" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFF8E7] rounded-full shadow-lg flex items-center justify-center"
            >
              <span className="text-4xl">🌾</span>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <span className="text-3xl">✨</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
