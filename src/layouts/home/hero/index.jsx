import {motion, useInView} from "framer-motion"
import { useRef } from "react";
export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <section id="about" className="bg-700 text-white py-20">
      <div  className="container  w-[90%] mx-auto flex flex-col md:flex-row items-center" ref={ref}>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 }: {}}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-500">
            Pioneering Platform for Precision Farming
          </h1>
          <p className="text-lg md:text-xl mb-8 text-400">
            <strong className="uppercase">About our project:</strong> This project aims to create a software to help farmers to increase
            their crop yield by giving sequential recommendations. Current
            methods often lack precision, leading to overuse or underuse of
            resources, which can impact both productivity and environmental
            sustainability.
          </p>
          
        </motion.div>
        <motion.div  className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 }: {}}
          transition={{ duration: 1, delay: 0.5 }}>
          <motion.img
            src="/images/hero.jpg"
            alt="Precision Farming"
            animate={isInView ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 "
          />
        </motion.div>
      </div>
    </section>
  );
}
