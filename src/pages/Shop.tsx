import React from "react";
import Breadcrumb from "../components/CommonComponets/BreadCrumb";
import Container from "../components/CommonComponets/Container";
import { useGetAllProduct } from "../hooks/UseFlashSaleOffer";
import Product from "../components/CommonComponets/Product";

const Shop = () => {
  const { data, refetch, isPending, isError, error } = useGetAllProduct();

  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="grid grid-cols-[1fr_4fr] py-10!">
          <div className="bg-primary-500">left</div>
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
