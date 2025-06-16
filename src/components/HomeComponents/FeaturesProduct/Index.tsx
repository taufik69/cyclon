import React, { useState } from "react";
import { assets } from "../../../helpers/AssetProvider";
import Container from "../../CommonComponets/Container";
import { icons } from "../../../helpers/IconsProver";
import Product from "../../CommonComponets/Product";
import { useQuery } from "@tanstack/react-query";
import { GetFeaturesProduct } from "../../../api/FeaturesProduct";
import { categoryWiseData, getCategoryData } from "../../../api/Category";

const FeaturesProduct: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  /**
   * @description get features product
   * @returns {isPending, isError, data, error}
   * @version 1.0.0
   */
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["featureProduct"],
    queryFn: GetFeaturesProduct,
  });

  /**
   * @description get Category data
   * @returns {isPending, isError, data, error}
   * @version 1.0.0
   */
  const { data: categoryData } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryData,
  });

  /**
   * @description get Category wise product
   * @returns {isPending, isError, data, error}
   * @version 1.0.0
   */
  const {
    data: categoryProduct,
    isError: categoryError,
    isPending: categoryPending,
    error: categoryErrorData,
    refetch: categoryRefetch,
  } = useQuery({
    queryKey: ["categoryWiseProduct", selectedCategory],
    queryFn: () => categoryWiseData(selectedCategory),
    enabled: !!selectedCategory,
  });

  /**
   * @description handle category
   * @version 1.0.0
   * @param {string}category
   */
  const handleCategory = (item: string) => {
    setSelectedCategory(item);
  };

  return (
    <Container>
      <div className="grid grid-cols-[1fr_4fr] h-[716px] gap-x-6">
        <div className="h-full">
          <img
            src={assets.featureProductLeft}
            alt="featureproduct Left"
            className="h-full w-full object-cover rounded"
          />
        </div>
        <div className="grid grid-rows-[8%90%] rounded! h-full">
          <div className="grid grid-cols-[1fr_4fr]  ">
            <h1 className="heading3 text-gray-900">Featured Products</h1>
            <div className="justify-self-end mt-2!">
              <div className="flex items-center gap-x-8">
                <ul className="flex items-center gap-x-4">
                  {categoryData?.slice(0, 7).map((item, index) => (
                    <li
                      onClick={() => handleCategory(item)}
                      key={index}
                      className="text-gray-600 capitalize body-medium-500 customStyle "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-x-2 text-primary-500  cursor-pointer  group">
                  Browse All Product
                  <span className="rotate-180 inline-block text-[17px]! mt-0.5! body-small-600 transition-all group-hover:scale-150 ">
                    {icons.longArrow}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Product
              status={
                selectedCategory === "all"
                  ? {
                      isPending,
                      isError,
                      data: {
                        products: data?.products,
                      },
                      error,
                      refetch,
                    }
                  : {
                      isPending: categoryPending,
                      isError: categoryError,
                      data: {
                        products: categoryProduct?.products,
                      },
                      error: categoryErrorData,
                      refetch: categoryRefetch,
                    }
              }
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesProduct;
