import React from "react";
import Container from "../../CommonComponets/Container";
import { assets } from "../../../helpers/AssetProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Banner = () => {
  return (
    <div className="py-10!">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-5 rounded">
          <div className="rounded">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img
                  src={assets.bannerOne}
                  alt={"BANNER"}
                  className="w-full h-full  object-cover rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={assets.bannerOne}
                  alt={"BANNER"}
                  className="w-full h-full  object-cover rounded"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={assets.bannerOne}
                  alt={"BANNER"}
                  className="w-full h-full  object-cover rounded"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="grid grid-rows-2  gap-y-5 justify-items-stretch rounded">
            <div className="bg-blue-900 rounded">
              <img
                src={assets.bannertwo}
                alt="bannerTwo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" rounded">
              <img
                src={assets.bannerThree}
                alt="bannerThree"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Banner) || Banner;
