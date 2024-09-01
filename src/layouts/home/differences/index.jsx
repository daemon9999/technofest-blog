import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaSatellite, FaLeaf, FaWater, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Differences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-[#1C2D25] text-white py-20">
      <div className="container w-[90%] mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-[#D4D21B]"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Main differences between Suni Ekinçi and others
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-12 text-[#E5EDF4]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our project addresses all of the following points which have not been
          covered by others, yet.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* First Card */}
          <motion.div
            className="bg-[#29471A] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <FaSatellite className="text-[#D4D21B] text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-[#D4D21B]">
                Precision in Small Areas
              </h3>
            </div>
            <p className="text-[#E5EDF4]">
              Soil moisture cannot be determined by satellite in small areas,
              and this can only be done with a sensor, which requires expensive
              maintenance.
            </p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="bg-[#29471A] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <FaLeaf className="text-[#D4D21B] text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-[#D4D21B]">
                NPK Parameters Measurement
              </h3>
            </div>
            <p className="text-[#E5EDF4]">
              The measurement of NPK parameters in plants is lacking in current
              approaches, which is critical for optimizing fertilizer use.
            </p>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="bg-[#29471A] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <FaWater className="text-[#D4D21B] text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-[#D4D21B]">
                Resource Management
              </h3>
            </div>
            <p className="text-[#E5EDF4]">
              Efficient resource spending through optimized irrigation and
              fertilizer management can enhance crop yield estimation.
            </p>
          </motion.div>

          {/* Fourth Card */}
          <motion.div
            className="bg-[#29471A] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="flex items-center mb-4">
              <FaGlobeAmericas className="text-[#D4D21B] text-4xl mr-4" />
              <h3 className="text-xl font-semibold text-[#D4D21B]">
                Environmental Impact
              </h3>
            </div>
            <p className="text-[#E5EDF4]">
              Improper fertilizer use and excess water consumption have serious
              environmental impacts. Agriculture accounts for 70% of global
              freshwater use, affecting the climate.
            </p>
          </motion.div>
        </div>
        <div className="mt-7 md:w-[600px] w-full mx-auto flex flex-col items-center gap-y-3">
          <p>
            {" "}
            Our service offers $44 payment per hectare on monthly basis.
            Consequently, the overall market value (Central Asia) can be
            calculated as approximately $44 billion . . .
          </p>
          <Link
            to={"/subscription"}
            className="bg-10 w-[100px] px-3 py-2  rounded-md text-lg font-medium border-10 border hover:bg-transparent transition-all duration-300"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
