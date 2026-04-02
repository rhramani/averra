import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5A3E2B] mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-[#5A3E2B]/70 max-w-2xl mx-auto">
            We're here to answer your questions, and listen to your feedback too! 
            Let us know what you have on your mind about our groundnut oil.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFF8E7] p-8 sm:p-12 rounded-3xl shadow-xl border border-[#F5C542]/20"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#5A3E2B] font-bold uppercase text-xs tracking-widest">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="bg-white border-[#D2B48C] focus:border-[#003366] h-12 rounded-lg font-medium"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#5A3E2B] font-bold uppercase text-xs tracking-widest">Your Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white border-[#D2B48C] focus:border-[#003366] h-12 rounded-lg font-medium"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#5A3E2B] font-bold uppercase text-xs tracking-widest">Contact No.</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Contact No." 
                    className="bg-white border-[#D2B48C] focus:border-[#003366] h-12 rounded-lg font-medium"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#5A3E2B] font-bold uppercase text-xs tracking-widest">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Subject" 
                    className="bg-white border-[#D2B48C] focus:border-[#003366] h-12 rounded-lg font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#5A3E2B] font-bold uppercase text-xs tracking-widest">Your Message (optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  className="bg-white border-[#D2B48C] focus:border-[#003366] min-h-[150px] rounded-lg font-medium"
                />
              </div>

              <div className="text-center pt-4">
                <Button className="bg-[#5A3E2B] hover:bg-[#5A3E2B] text-white px-16 py-7 text-xl font-black uppercase tracking-tighter rounded-lg transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
