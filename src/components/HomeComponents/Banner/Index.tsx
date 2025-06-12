import React from "react";
import Container from "../../CommonComponets/Container";
import { assets } from "../../../helpers/AssetProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// Swiper core styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="py-10!">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-5 rounded">
          <div className="rounded">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("Slide changed")}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
            >
              {[1, 2, 3].map((n) => (
                <SwiperSlide key={n}>
                  <img
                    src={`https://via.placeholder.com/800x400?text=Slide+${n}`}
                    alt={`Slide ${n}`}
                    className="w-full h-64 object-cover rounded"
                  />
                </SwiperSlide>
              ))}
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
