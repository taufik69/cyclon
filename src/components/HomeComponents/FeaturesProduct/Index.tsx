import React, { useState } from "react";
import { assets } from "../../../helpers/AssetProvider";
import Container from "../../CommonComponets/Container";
import type { featureProduct } from "../../../types/featuresProduct";
import { icons } from "../../../helpers/IconsProver";
import Product from "../../CommonComponets/Product";

const FeaturesProduct: React.FC = () => {
  const [featuresProductList] = useState<featureProduct[]>([
    {
      id: 1,
      name: "All Product",
      slug: "all-product",
    },
    {
      id: 2,
      name: "Smart Phone",
      slug: "smart-phone",
    },
    {
      id: 3,
      name: "Laptop",
      slug: "laptop",
    },
    {
      id: 4,
      name: "Headphone",
      slug: "headphone",
    },
    {
      id: 5,
      name: "TV",
      slug: "tv",
    },
  ]);
  return (
    <Container>
      <div className="grid grid-cols-[1fr_4fr] max-h-full gap-x-6">
        <div>
          <img
            src={assets.featureProductLeft}
            alt="featureproduct Left"
            className="h-full object-cover rounded"
          />
        </div>
        <div className="grid grid-rows-[8%90%] rounded! justify-between">
          <div className="grid grid-cols-[1fr_1fr]">
            <h1 className="heading3 text-gray-900">Featured Products</h1>
            <div className="justify-self-end">
              <div className="flex items-center gap-x-8">
                <ul className="flex items-center gap-x-4">
                  {featuresProductList?.map((item) => (
                    <li
                      key={item.id}
                      className="text-gray-600 body-medium-500 customStyle "
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-x-2 text-primary-500">
                  Browse All Product
                  <span className="rotate-180 inline-block text-[17px]! mt-1! body-small-600">
                    {icons.longArrow}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...new Array(8)].map((_, index) => (
              <Product key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesProduct;
