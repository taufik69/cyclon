import React from "react";
import Container from "../../CommonComponets/Container";
import { assets } from "../../../helpers/AssetProvider";
import { motion } from "motion/react";
const Arrival: React.FC = () => {
  //   const ref = useRef(null);
  //   const animation = useAnimation();
  //   const inView = useInView(ref, { amount: 0.2 });
  //   useEffect(() => {
  //     if (inView) {
  //       animation.start({
  //         opacity: 1,
  //         transform: "translateX(0)",
  //         transition: { duration: 0.7, delay: 0.2 },
  //       });
  //     } else {
  //       animation.start({
  //         opacity: 0,
  //         transform: "translateX(-100px)",
  //         transition: { duration: 0.7, delay: 0.2 },
  //       });
  //     }
  //   }, [inView]);
  return (
    <div className="py-20!">
      <Container>
        <div className="grid grid-cols-2 gap-x-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={assets.arrival1}
              alt="assets.arrival1"
              className="w-full h-fit  object-cover cursor-pointer"
            />
          </motion.div>
          {/* Right div (opposite) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={assets.arrival2}
              alt="assets.arrival2"
              className="w-full h-fit object-cover cursor-pointer"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Arrival) || Arrival;
