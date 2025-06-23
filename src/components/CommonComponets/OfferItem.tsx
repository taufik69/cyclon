import React from "react";
import type { queryType } from "../../types/OfferData";
import FeatrureProductError from "../../Error/FeatrureProductError";
import { motion } from "motion/react";
type props = {
  title: string;
  wholeData: queryType;
};
const OfferItem: React.FC<props> = ({ title, wholeData }) => {
  const error = wholeData?.error;
  if (error) {
    FeatrureProductError({
      message: error.message,
      onRetry: wholeData.refetch(),
    });
  }

  const data = wholeData?.data?.products;

  return (
    <div>
      <div>
        <h1 className="body-large-500 text-gray-900 mb-4!">{title}</h1>
        <div className="grid grid-rows-3 gap-y-4">
          {data?.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 10 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 0.96, y: -4 }}
              transition={{
                duration: 7,
                delay: 0.7,
                type: "spring",
                stiffness: 150,
              }}
              key={item.id}
              className="border cursor-pointer border-gray-100 rounded py-4! pr-4! grid grid-cols-[1fr_3fr] items-center"
            >
              <div>
                <img
                  src={item.images[0]}
                  alt=""
                  className="w-full h-full object-cover px-3!"
                />
              </div>
              <div className="body-medium-500 text-gray-900 w-full flex flex-col gap-y-2">
                <p className="">{item.description.slice(0, 65)}...</p>
                <p className="text-secondary-500 body-small-600 ">
                  ${item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
