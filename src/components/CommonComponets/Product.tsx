import React from "react";
import { assets } from "../../helpers/AssetProvider";
import { icons } from "../../helpers/IconsProver";
type featureProductProp = {
  key: number;
};
const Product: React.FC<featureProductProp> = ({ key }) => {
  return (
    <div key={key}>
      <div className="max-w-[300px] p-4! border border-gray-100 rounded relative shadow">
        <div className="flex items-center justify-center">
          <img
            src={assets.mobile}
            alt="mobil"
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="bg-gray-00 pt-4!">
          {/* rating */}
          <div className="flex items-center gap-x-2">
            <div>
              {[1, 2, 3, 4].map(() => (
                <span className="text-primary-500">{icons.fullStar}</span>
              ))}
            </div>
            <span className="text-gray-500  body-tiny-600">(48) </span>
          </div>

          {/* product details */}
          <h1 className="body-xl-400 text-gray-900 mb-1! ">Galexy S21 5G</h1>
          <p className="body-large-400 text-gray-900 truncate mb-1! ">
            TOZO T6 True Wireless Earbuds Bluetooth Headphon
          </p>
          {/* price */}
          <div className=" flex items-center gap-x-2">
            <span className="line-through text-gray-400 body-large-600">
              ৳ 1,999
            </span>
            <span className="text-secondary-500 body-large-600">৳ 2,999</span>
          </div>
        </div>

        {/* hotDeal */}
        <div>
          <p className="absolute top-2 left-2 bg-secondary-500 body-tiny-600 text-gray-00 py-2! px-2! rounded">
            {"BEST DEALS"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
