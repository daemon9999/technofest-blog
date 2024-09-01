import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

import { motion, useInView } from 'framer-motion';
import  { useRef } from 'react';
export default function SocialMedia() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="bg-gradient-to-b from-100 to-10 via-700  text-white py-16">
        <div className="container mx-auto text-center" ref={ref}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-500"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Follow Us on Social Media
          </motion.h2>
          <motion.div
            className="flex items-center justify-center space-x-8 text-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-500 hover:text-900  duration-300 hover:scale-[1.3] transition-all" />
            </a>
            <a href="mailto:suniekinchi@gmail.com" target="_blank" rel="noopener noreferrer">
              <BiLogoGmail size={40} className="text-500 hover:text-900  duration-300 hover:scale-[1.3] transition-all" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-500 hover:text-900  duration-300 hover:scale-[1.3] transition-all " />
            </a>
          
          </motion.div>
        </div>
      </div>
    )
}