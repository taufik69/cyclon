// import React from "react";
import Container from "../../CommonComponets/Container";
import { assets } from "../../../helpers/AssetProvider";
import Slider from "../../CommonComponets/Slider";
import React from "react";

const Banner = () => {
  return (
    <div className="py-10!">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-5 rounded">
          <div className="w-[1000px] h-[500px]">
            <Slider animationStyle="cube" paginationActive={true}>
              <img
                src={assets.bannerOne}
                alt="bannerOne"
                className="w-full h-full object-cover rounded"
              />
            </Slider>
          </div>
          <div className="grid grid-rows-2  gap-y-16 justify-items-stretch rounded">
            <div className=" w-[500px] rounded h-[250px]">
              <Slider animationStyle="cards" paginationActive={false}>
                <img
                  src={assets.bannertwo}
                  alt="bannerTwo"
                  className="w-full h-full object-cover"
                />
              </Slider>
            </div>
            <div className="rounded">
              <div className="w-[500px] rounded h-[250px]">
                <Slider animationStyle="coverflow" paginationActive={false}>
                  <img
                    src={assets.bannerThree}
                    alt="bannerTwo"
                    className="w-full h-full object-cover"
                  />
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
