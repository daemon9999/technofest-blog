import { motion,useInView } from "framer-motion";
import { useRef } from "react";
import { FaCloud, FaSatelliteDish } from "react-icons/fa";
export default function Plans() {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-gradient-to-b from-400 to-white text-100 py-16">
      <div className="w-[90%] container mx-auto px-4" ref={ref}>
        <motion.h2
          className="text-[22px] leading-[30px] xs:text-3xl md:text-4xl font-bold text-center mb-8 text-500"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Commercialisation and Future Research Potential
        </motion.h2>
        <motion.p
          className="text-base xs:text-lg md:text-xl mb-12 text-center text-100"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our service offers $44 payment per hectare on a monthly basis. Consequently, the overall market value (Central Asia) can be calculated as approximately $44 billion, which can be evaluated as quite large. Coming to added value, test findings for Precision Agriculture show impressive production increases: 20% better yields for wheat, 15% higher yields for maize, and 5% higher yields for soybeans. Interestingly, these improvements come with significant resource savings, with a 10% to 20% reduction in the use of pesticides and fertilizers (I. Vatin et al. 2024). Taking into account that our project consists of software and hardware sections whose needs (satellite data and sensors) for both of them can easily be provided from the marketplace, the project can be evaluated as applicable enough. Also, “Suni Ekinchi BHOS” project contains the usage of IoT with sensors, comprehensive AI algorithms, and various types of satellite imagery. This project can trigger the studies of AI-based pest control systems, crop health diagnostics, and soil health monitoring. Tech companies that provide relevant satellite data or hardware components, and agricultural suppliers can cooperate with us to enhance our system with technological advancements and create integrated solutions for customers. In addition, collaborations with universities and research institutes will foster agricultural science.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Free Plan */}
          <motion.div
            className="bg-800 text-white rounded-lg p-6 shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-500">Free Plan</h3>
            <p className="mb-4 text-center">No commitment</p>
            <p className="text-2xl font-semibold mb-4 mt-auto">$0 / month</p>
            <ul className="list-disc text-left mb-6">
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Data storage</li>
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Weather data</li>
              <li className="flex items-center"><FaSatelliteDish className="mr-2 text-500 flex-shrink-0" /> Satellite image with 20*20 m resolution</li>
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Unlimited users</li>
            </ul>
          </motion.div>

          {/* Basic Plan */}
          <motion.div
            className="bg-800 text-white rounded-lg p-6 shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-500">Basic Plan</h3>
            <p className="mb-4 text-center">No minimum commitment. Pause or cancel anytime</p>
            <p className="text-2xl font-semibold mb-4 mt-auto">$12 / month</p>
            <ul className="list-disc text-left mb-6">
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Everything in Free Plan</li>
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Soil moisture, Temperature, Air temperature, Humidity</li>
              <li className="flex items-center"><FaSatelliteDish className="mr-2 text-500 flex-shrink-0" /> Satellite image with 10*10 m resolution</li>
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Irrigation plan</li>
            </ul>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="bg-800 text-white rounded-lg p-6 shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 text-500">Premium Plan</h3>
            <p className="mb-4 text-center">No minimum commitment. Pause or cancel anytime</p>
            <p className="text-2xl font-semibold mb-4 mt-auto">$30 / month</p>
            <ul className="list-disc text-left mb-6">
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Everything in Basic Plan</li>
              <li className="flex items-center"><FaSatelliteDish className="mr-2 text-500 flex-shrink-0" /> Satellite image with 30*30 cm resolution</li>
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> Fertilizer estimation</li>
              <li className="flex items-center"><FaCloud className="mr-2 text-500 flex-shrink-0" /> AI based recommendations (including sensor, satellite data)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}