import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";
//@ts-ignore
import "swiper/css/bundle";
import { assets } from "../../helpers/AssetProvider";

const TestSwiper: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto my-10!">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
        effect="flip"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <SwiperSlide key={n}>
            <div>
              <img
                src={assets.bannerOne}
                alt={"BANNER"}
                className="w-full h-full  object-cover rounded"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom arrows */}
      <button
        className="next absolute left-2 top-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full shadow p-2 z-10"
        type="button"
      >
        Prev
      </button>
      <button
        className="prev absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full shadow p-2 z-10"
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default TestSwiper;
