import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'The quality of Averra oil is exceptional! The authentic taste reminds me of my grandmother\'s cooking. My family loves it, and I feel good knowing we\'re using completely natural oil.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'I\'ve tried many brands, but Averra stands out. The cold-pressed method really makes a difference. The oil has a rich aroma and adds amazing flavor to our food.',
  },
  {
    name: 'Anjali Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Best groundnut oil I\'ve ever used! It\'s pure, healthy, and reasonably priced. I\'ve recommended Averra to all my friends and family. Truly impressed!',
  },
  {
    name: 'Vikram Singh',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'As someone who cares about health, finding Averra was a blessing. No chemicals, traditional method, and incredible taste. This is what real oil should be like!',
  },
];

export const Testimonials = () => {
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Join thousands of happy families who have made the switch to Averra
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="border-2 border-[#F5C542]/20 hover:border-[#F5C542] transition-all h-full">
                    <CardContent className="p-8 space-y-6">
                      <Quote className="h-10 w-10 text-[#F5C542]" />

                      <p className="text-[#5A3E2B]/80 leading-relaxed text-lg">
                        "{testimonial.text}"
                      </p>

                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-[#F5C542] text-[#F5C542]"
                          />
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#F5C542]/20">
                        <div className="font-bold text-[#5A3E2B]">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-[#5A3E2B]/60">
                          {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#5A3E2B] text-[#5A3E2B] hover:bg-[#F5C542] hover:border-[#F5C542]" />
            <CarouselNext className="border-[#5A3E2B] text-[#5A3E2B] hover:bg-[#F5C542] hover:border-[#F5C542]" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
