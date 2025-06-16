// import React from "react";
import { Swiper } from "swiper/react";

import {
  Pagination,
  A11y,
  EffectCube,
  Autoplay,
  EffectFlip,
  EffectCards,
  EffectCoverflow,
  EffectFade,
} from "swiper/modules";
//@ts-ignore

import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
//@ts-ignore
import "swiper/css/pagination";
import React from "react";

interface propsType {
  children: React.ReactNode;
  animationStyle: string;
  paginationActive: boolean;
}
const Slider: React.FC<propsType> = ({
  children,
  animationStyle = "cube",
  paginationActive,
}) => {
  return (
    <div>
      <Swiper
        modules={[
          A11y,
          EffectCube,
          Autoplay,
          EffectFlip,
          EffectCards,
          EffectCoverflow,
          EffectFade,
          ...(paginationActive ? [Pagination] : []),
        ]}
        effect={animationStyle || "fade"}
        autoplay={{ delay: 3500, disableOnInteraction: false }} // Enable autoplay
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default React.memo(Slider);
