import React, { useState } from "react";
import Breadcrumb from "../components/CommonComponets/BreadCrumb";
import Container from "../components/CommonComponets/Container";
import { useGetAllProduct } from "../hooks/UseFlashSaleOffer";
import Product from "../components/CommonComponets/Product";
import { useCategoryData } from "../hooks/UseCategory";

import "react-range-slider-input/dist/style.css";

const Shop = () => {
  const [value, setValue] = useState([30, 60]);
  const { data, refetch, isPending, isError, error } = useGetAllProduct();
  const {
    data: categoryData,
    refetch: categoryRefetch,
    isPending: catgoryIspending,
  } = useCategoryData();

  console.log(categoryData);

  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="grid grid-cols-[1fr_4fr] py-10! gap-x-4">
          <div>
            <div className="border-b-2 pb-6! border-b-gray-100">
              <h1 className="label2 text-gray-900 capitalize">category</h1>
              <div className="h-[40vh] overflow-y-scroll scrollbar">
                <ul className="flex flex-col gap-y-2">
                  {categoryData?.map((item: string, index: number) => (
                    <div
                      className="flex items-center gap-x-2 mt-2!"
                      key={index}
                    >
                      <input
                        type="radio"
                        id={item}
                        name="category"
                        className="w-3 h-3 cursor-pointer "
                      />
                      <label htmlFor={item} className="text-gray-700" id={item}>
                        <li
                          key={index}
                          id={item}
                          className="text-gray-700 body-medium-400 hover:text-gray-900 cursor-pointer capitalize"
                        >
                          {item}
                        </li>
                      </label>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* price range */}
            <div className="border-b-2 pb-6! border-b-gray-100">
              <h1 className="label2 text-gray-900 capitalize">Price Range</h1>
              <div>
                <h1>lsdk</h1>
              </div>
            </div>
          </div>
          {/* right side */}
          <div>
            <div className="grid grid-rows-[1fr_1fr_10fr] gap-y-3 h-full">
              <div className="bg-blue-500 grid grid-cols-2 h-full">
                <div className="bg-secondary-500">col 1</div>
                <div className="bg-secondary-300">col 2</div>
              </div>
              <div className="  bg-secondary-700">
                <div className="grid grid-cols-2 h-full">
                  <div className="bg-secondary-300">col 1</div>
                  <div className="bg-secondary-500">col 2</div>
                </div>
              </div>
              <div className=" ">
                <Product
                  status={{
                    fulldataLoad: true,
                    isPending,
                    isError,
                    data,
                    error,
                    refetch: () => {
                      refetch();
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Shop);
