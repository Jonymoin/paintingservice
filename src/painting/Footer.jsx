import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Company Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Painting Service SG 
          </h3>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            RAVEVA PTE LTD
          </h3>
          <p className="mb-4">
            511 Guillemard road <br />#02-14 Grand Link Square <br />Singapore 399849
          </p>
          
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Singapore's trusted painting service. Quality workmanship, affordable rates, and customer satisfaction guaranteed. We bring color to your life!
          </p>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Free Quote
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Call Us</p>
                <p className="text-gray-200 text-sm font-medium">+65 8171 3404</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Email Us</p>
                <p className="text-gray-200 text-sm font-medium">info@everfresh.sg</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Location</p>
                <p className="text-gray-200 text-sm font-medium">Singapore</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Working Hours</p>
                <p className="text-gray-200 text-sm font-medium">Mon - Sun: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Services */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
          <ul className="space-y-2 mb-6">
            <li className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">→ Residential Painting</li>
            <li className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">→ Commercial Painting</li>
            <li className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">→ Interior & Exterior</li>
            <li className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">→ Wall Plastering</li>
            <li className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">→ Anti-Mould Solutions</li>
          </ul>
          
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Painting Service. All rights reserved.
          </p>
          <p className="text-center text-gray-400 text-sm">
            🇸🇬 Proudly Serving Singapore | Quality You Can Trust
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;