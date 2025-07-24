import React from "react";
import { assets } from "../../helpers/AssetProvider";
import { icons } from "../../helpers/IconsProver";
import ProductSkeleton from "../Skeletion/ProductSkeletion";
import type { productDataType } from "../../types/productapidata";
import { Discount } from "../../helpers/Discount";
import { motion } from "motion/react";
import Star from "./Star";
import FeatureProductError from "../../Error/FeatrureProductError";
import { log } from "console";

type featureProductProp = {
  status: {
    fulldataLoad: boolean;
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
      {status.fulldataLoad
        ? status?.data?.map((item: productDataType) => (
            <div className="max-w-[300px] p-4!  border border-gray-100 rounded relative shadow">
              <div className="flex overflow-hidden items-center justify-center relative">
                <img
                  src={item.images[0] || assets.mobile}
                  alt="mobil"
                  className="max-w-[202px] max-h-[190px]  object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7, scale: 1.1 }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="p-8!  cursor-pointer rounded bg-gray-800 w-full h-full absolute top-0 left-0 flex items-center justify-center z-10 backdrop-blur-lg"
                >
                  <div className="flex items-center gap-x-2">
                    <motion.button
                      initial={{ fontSize: "20px" }}
                      whileTap={{
                        background: "red",
                        border: "2px solid var(--color-gray-00)",
                      }}
                      whileHover={{
                        fontSize: "25px",
                        transform: "rotate(360deg)",
                        background: "var(--color-primary-500)",
                        color: "var(--color-gray-00)",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-gray-00 w-10 flex items-center justify-center  cursor-pointer  h-10 rounded-full "
                    >
                      <span>{icons.heart}</span>
                    </motion.button>
                    <motion.button
                      initial={{ fontSize: "20px" }}
                      whileHover={{
                        fontSize: "25px",
                        transform: "rotate(360deg)",
                        background: "var(--color-primary-500)",
                        color: "var(--color-gray-00)",
                      }}
                      whileTap={{
                        background: "red",
                        border: "2px solid var(--color-gray-00)",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-gray-00 w-10 flex items-center justify-center  cursor-pointer  h-10 rounded-full "
                    >
                      <span>{icons.cart}</span>
                    </motion.button>
                    <motion.button
                      initial={{ fontSize: "20px" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        fontSize: "25px",
                        transform: "rotate(360deg)",
                        background: "var(--color-primary-500)",
                        color: "var(--color-gray-00)",
                      }}
                      whileTap={{
                        background: "red",
                        border: "2px solid var(--color-gray-00)",
                      }}
                      className="bg-gray-00 w-10 flex items-center justify-center  cursor-pointer  h-10 rounded-full "
                    >
                      <span>{icons.compare}</span>
                    </motion.button>
                  </div>
                </motion.div>
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
                  <p className="absolute top-2 right-2 bg-sucess-500 body-small-600 text-gray-00 py-2! px-2! rounded">
                    {"SALE"}
                  </p>
                ) : (
                  <p className="absolute top-2 right-2 bg-sucess-500 body-small-600 text-gray-00 py-2! px-2! rounded z-20">
                    {"NEW"}
                  </p>
                )}
              </div>
            </div>
          ))
        : status?.data?.products?.slice(0, 8).map((item: productDataType) => (
            <div className="max-w-[300px] p-4!  border border-gray-100 rounded relative shadow">
              <div className="flex overflow-hidden items-center justify-center relative">
                <img
                  src={item.images[0] || assets.mobile}
                  alt="mobil"
                  className="max-w-[202px] max-h-[172px]  object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7, scale: 1.1 }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="p-8!  cursor-pointer rounded bg-gray-800 w-full h-full absolute top-0 left-0 flex items-center justify-center z-10 backdrop-blur-lg"
                >
                  <div className="flex items-center gap-x-2">
                    <motion.button
                      initial={{ fontSize: "20px" }}
                      whileTap={{
                        background: "red",
                        border: "2px solid var(--color-gray-00)",
                      }}
                      whileHover={{
                        fontSize: "25px",
                        transform: "rotate(360deg)",
                        background: "var(--color-primary-500)",
                        color: "var(--color-gray-00)",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-gray-00 w-10 flex items-center justify-center  cursor-pointer  h-10 rounded-full "
                    >
                      <span>{icons.heart}</span>
                    </motion.button>
                    <motion.button
                      initial={{ fontSize: "20px" }}
                      whileHover={{
                        fontSize: "25px",
                        transform: "rotate(360deg)",
                        background: "var(--color-primary-500)",
                        color: "var(--color-gray-00)",
                      }}
                      whileTap={{
                        background: "red",
                        border: "2px solid var(--color-gray-00)",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-gray-00 w-10 flex items-center justify-center  cursor-pointer  h-10 rounded-full "
                    >
                      <span>{icons.cart}</span>
                    </motion.button>
                    <motion.button
                      initial={{ fontSize: "20px" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        fontSize: "25px",
                        transform: "rotate(360deg)",
                        background: "var(--color-primary-500)",
                        color: "var(--color-gray-00)",
                      }}
                      whileTap={{
                        background: "red",
                        border: "2px solid var(--color-gray-00)",
                      }}
                      className="bg-gray-00 w-10 flex items-center justify-center  cursor-pointer  h-10 rounded-full "
                    >
                      <span>{icons.compare}</span>
                    </motion.button>
                  </div>
                </motion.div>
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
                  <p className="absolute top-2 right-2 bg-sucess-500 body-small-600 text-gray-00 py-2! px-2! rounded">
                    {"SALE"}
                  </p>
                ) : (
                  <p className="absolute top-2 right-2 bg-sucess-500 body-small-600 text-gray-00 py-2! px-2! rounded z-20">
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
