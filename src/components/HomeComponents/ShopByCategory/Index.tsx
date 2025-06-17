import React from "react";
import Container from "../../CommonComponets/Container";
import { ShopByCategoryData } from "../../../libs/lib";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
//@ts-ignore
import "swiper/css";
import { icons } from "../../../helpers/IconsProver";
import { motion } from "motion/react";
const ShopByCategory = () => {
  return (
    <div className="pt-10!">
      <Container>
        <div className="grid justify-center">
          <h1 className="heading1 text-gray-900">Shop with Categorys</h1>
        </div>
        {/* slide category */}
        <div className="py-10! relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={6}
            grabCursor={true}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {ShopByCategoryData.map((item) => (
              <SwiperSlide key={item.id} className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="border grid justify-center w-full items-center border-gray-100 py-5! rounded"
                >
                  <img src={item.image} alt="" />
                  <h1 className="body-medium-500 text-gray-900 text-center">
                    {item.name}
                  </h1>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* arrow button */}

          <motion.span
            whileHover={{ scale: 1.1, transform: "rotate(360deg)" }}
            transition={{
              duration: 0.4,
            }}
            className="next absolute top-1/2 -translate-y-[50%] -right-5 z-10 text-gray-900 text-2xl cursor-pointer w-10 h-10 rounded-full text-center leading-[44px] bg-orange-500 "
          >
            <span className="text-gray-00">{icons.arrow}</span>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1, transform: "rotate(360deg)" }}
            transition={{
              duration: 0.4,
            }}
            className="prev absolute top-1/2 -translate-y-[50%] -left-5 z-10 text-gray-900 text-2xl cursor-pointer w-10 h-10 rounded-full text-center leading-[44px] bg-orange-500 "
          >
            <span className="text-gray-00 rotate-180">{icons.arrow}</span>
          </motion.span>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(ShopByCategory);
