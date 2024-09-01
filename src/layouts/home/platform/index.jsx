import {motion,  useInView} from "framer-motion"
import { useRef } from "react";
export default function Platform() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <section id="product" className="bg-gradient-to-b from-800 via-700 to-900   text-white py-20">
      <div className="container w-[90%] gap-x-16 gap-y-4 mx-auto flex flex-col md:flex-row  items-center" ref={ref}>
        <motion.div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 order-1 md:order-2"
          initial="hidden"
          animate={isInView ? 'visible' : ''}
          variants={{
            hidden: {},
            visible: isInView ? {
              transition: {
                staggerChildren: 0.2,
              },
            } : {},
          }}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-400"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: isInView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {},
            }}
          >
            Advanced AI-Driven Platform
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-8 text-400"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible:isInView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {},
            }}
          >
            To address these issues, we have developed a pioneering platform
            that integrates satellite and soil sensor data with advanced AI
            models. Basically, models with various tasks were considered to
            estimate soil moisture from radar data and nutrient content from
            multi-spectral data. In addition, multispectral data is examined by
            AI model to determine nutrient content level.
          </motion.p>
        </motion.div>
        <div className="md:w-1/2 flex flex-col xs:flex-row justify-center h-auto gap-y-4 xs:gap-y-0  xs:space-x-4 flex-shrink-0 order-2 md:order-1">
          <motion.img
            src="/images/soil-sensor.jpg"
            alt="Soil Sensor Data"
            className="rounded-lg shadow-lg w-full xs:w-1/3 h-full border-4 border-20"
            initial={{ opacity: 0, rotate: -15 }}
            animate={isInView ?{ opacity: 1, rotate: 0 }: {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.img
            src="/images/satellite.jpg"
            alt="Satellite Data"
            className="rounded-lg shadow-lg w-full xs:w-1/3 h-full border-4 border-20"
            initial={{ opacity: 0, rotate: 15 }}
            animate={isInView ?{ opacity: 1, rotate: 0 }: {}}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.img
            src="/images/ai.jpg"
            alt="AI Model"
            className="rounded-lg shadow-lg w-full xs:w-1/3 h-full border-4 border-20"
            initial={{ opacity: 0, rotate: -15 }}
            animate={isInView ? { opacity: 1, rotate: 0 }: {}}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
      </div>
    </section>
  );
}
