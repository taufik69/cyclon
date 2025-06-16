import React from "react";
import { assets } from "../../helpers/AssetProvider";
import { icons } from "../../helpers/IconsProver";
import ProductSkeleton from "../Skeletion/ProductSkeletion";
import type { productDataType } from "../../types/productapidata";

type featureProductProp = {
  status: { isPending: boolean; isError: boolean; data: any; error: any };
};
const Product: React.FC<featureProductProp> = ({ status }) => {
  console.log(status.data);
  if (status.isPending) {
    return <ProductSkeleton />;
  }

  return (
    <div className="h-full grid grid-cols-4 gap-4">
      {status.data.products.slice(0, 8).map((item: productDataType) => (
        <div className="max-w-[300px] p-4!  border border-gray-100 rounded relative shadow">
          <div className="flex items-center justify-center">
            <img
              src={item.images[0] || assets.mobile}
              alt="mobil"
              className="max-w-[202px] max-h-[172px]  object-cover"
            />
          </div>
          <div className="bg-gray-00 pt-2!">
            {/* rating */}
            <div className="flex items-center gap-x-2">
              <div>
                {[1, 2, 3, 4].map(() => (
                  <span className="text-primary-500">{icons.fullStar}</span>
                ))}
              </div>
              <span className="text-gray-500  body-tiny-600">
                ({item.reviews.length})
              </span>
            </div>

            {/* product details */}
            <h1 className="body-xl-400 text-gray-900 mb-1! truncate ">
              {item.title || "Product Name"}
            </h1>
            <p className="body-large-400 text-gray-900 truncate mb-1! ">
              {item.description || "Product Description"}
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
      ))}
    </div>
  );
};

export default React.memo(Product);
