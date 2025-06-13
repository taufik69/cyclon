// import React from "react";
import Container from "../../CommonComponets/Container";
import { assets } from "../../../helpers/AssetProvider";
import Slider from "../../CommonComponets/Slider";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

const Banner = () => {
  type bannerTypes = {
    id: number;
    name: string;
    image: string;
  };
  const [bannerList] = useState<bannerTypes[]>([
    {
      id: 1,
      name: "bannerOne",
      image: assets.bannerOne,
    },
    {
      id: 2,
      name: "bannerOne",
      image: assets.bannerOne,
    },

    {
      id: 3,
      name: "bannerOne",
      image: assets.bannerOne,
    },
  ]);
  return (
    <div className="py-10!">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-5 rounded">
          <div className="w-[1000px] h-[500px]">
            <Slider animationStyle="cards" paginationActive={true}>
              {bannerList.map((item) => (
                <SwiperSlide>
                  <img
                    src={item.image ?? assets.bannerOne}
                    alt="bannerOne"
                    className="w-[1000px] h-[610px] object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Slider>
          </div>
          <div className="grid grid-rows-2  gap-y-16 justify-items-stretch rounded">
            <div className=" w-[500px] rounded h-[250px]">
              <Slider animationStyle="cards" paginationActive={false}>
                {bannerList.map(() => (
                  <SwiperSlide>
                    <img
                      src={assets.bannertwo}
                      alt="bannerOne"
                      className="w-full h-full object-cover rounded"
                    />
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
            <div className="rounded">
              <div className="w-[500px] rounded h-[250px]">
                <Slider animationStyle="coverflow" paginationActive={false}>
                  {bannerList.map(() => (
                    <SwiperSlide>
                      <img
                        src={assets.bannerThree}
                        alt="bannerOne"
                        className="w-full h-full object-cover rounded"
                      />
                    </SwiperSlide>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Banner);
