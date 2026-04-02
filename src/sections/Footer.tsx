import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#5A3E2B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-[#F5C542]">Averra</h3>
            <p className="text-white/80 leading-relaxed">
              Premium traditional ghani groundnut oil for healthy living.
              Pure, natural, and chemical-free.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-[#F5C542] rounded-full flex items-center justify-center hover:bg-[#E0B438] transition-colors"
              >
                <Facebook className="h-5 w-5 text-[#5A3E2B]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-[#F5C542] rounded-full flex items-center justify-center hover:bg-[#E0B438] transition-colors"
              >
                <Instagram className="h-5 w-5 text-[#5A3E2B]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-[#F5C542] rounded-full flex items-center justify-center hover:bg-[#E0B438] transition-colors"
              >
                <Twitter className="h-5 w-5 text-[#5A3E2B]" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-[#F5C542]">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About', 'Benefits', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-[#F5C542] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-[#F5C542]">Products</h4>
            <ul className="space-y-2">
              {['Premium Tin 15L', 'Family Pack 5L', 'Starter Pack 1L', 'Gift Hampers', 'Bulk Orders'].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-white/80 hover:text-[#F5C542] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-[#F5C542]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F5C542] flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  123 Oil Mill Road, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F5C542] flex-shrink-0" />
                <span className="text-white/80">1800-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#F5C542] flex-shrink-0" />
                <span className="text-white/80">info@averra.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© {currentYear} Averra. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#F5C542] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#F5C542] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#F5C542] transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
