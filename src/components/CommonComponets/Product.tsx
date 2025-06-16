import React from "react";
import { assets } from "../../helpers/AssetProvider";
import { icons } from "../../helpers/IconsProver";
import ProductSkeleton from "../Skeletion/ProductSkeletion";
import type { productDataType } from "../../types/productapidata";
import { Discount } from "../../helpers/Discount";
import { log } from "console";
import Star from "./Star";
import FeatureProductError from "../../Error/FeatrureProductError";

type featureProductProp = {
  status: {
    isPending: boolean;
    isError: boolean;
    data: any;
    error: any;
    refetch: () => void;
  };
};
const Product: React.FC<featureProductProp> = ({ status }) => {
  if (status.isPending) {
    return <ProductSkeleton />;
  }
  if (status.isError) {
    return (
      <FeatureProductError message={status.error} onRetry={status.refetch} />
    );
  }

  return (
    <div className="h-full grid grid-cols-4 gap-4">
      {status?.data?.products?.slice(0, 8).map((item: productDataType) => (
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
                <Star rating={item.rating} />
              </div>
              <span className="text-gray-500  body-xl-300">
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
                ৳ {Discount(item.price, item.discountPercentage).toFixed(2)}
              </span>
              <span className="text-secondary-500 body-large-600">
                ৳ {item.price}
              </span>
            </div>
          </div>

          {/* hotDeal */}
          <div>
            {item.discountPercentage > 0 && (
              <p className="absolute top-2 left-2 bg-warning-400 body-small-600 text-gray-900 py-2! px-2! rounded">
                {Math.round(item.discountPercentage)}% OFF
              </p>
            )}
            {item.stock >= 50 ? (
              <p className="absolute top-2 right-2 bg-danger-500 body-small-600 text-gray-00 py-2! px-2! rounded">
                {"BEST DEAL"}
              </p>
            ) : item.stock <= 10 ? (
              <p className="absolute top-2 right-2 bg-success-500 body-small-600 text-gray-00 py-2! px-2! rounded">
                {"SALE"}
              </p>
            ) : (
              <p className="absolute top-2 right-2 bg-success-500 body-small-600 text-gray-00 py-2! px-2! rounded">
                {"NEW"}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Product);
