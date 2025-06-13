import React, { useState } from "react";
import { assets } from "../../../helpers/AssetProvider";
import Container from "../../CommonComponets/Container";
const Features: React.FC = () => {
  type Feature = {
    id: number;
    name: string;
    description: string;
    icons: string;
  };
  const [feature] = useState<Feature[]>([
    {
      id: 1,
      name: "Fasted Delivery",
      description: "Delivery in 24/H",
      icons: assets.pakage,
    },
    {
      id: 2,
      name: "24 Hours Return",
      description: "100% money-back guarantee",
      icons: assets.Tropy,
    },
    {
      id: 3,
      name: "Secure Payment",
      description: "Your money is safe",
      icons: assets.creditCart,
    },
    {
      id: 4,
      name: "Support 24/7",
      description: "Live contact/message",
      icons: assets.haedphone,
    },
  ]);
  return (
    <div>
      <Container>
        <div className="border border-gray-100 px-10! py-7! rounded grid grid-cols-4  gap-x-5">
          {feature?.map((item) => (
            <div
              className={
                feature.length == item.id
                  ? "flex items-center gap-x-3 "
                  : " flex items-center gap-x-3 border-r-1 border-r-gray-100"
              }
              key={item.id}
            >
              <img src={item.icons} alt="" className="  text-gray-900" />
              <div>
                <h1 className="label3 text-gray-900 "> {item.name}</h1>
                <p className="body-small-400 text-gray-500 mt-2 ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Features);
