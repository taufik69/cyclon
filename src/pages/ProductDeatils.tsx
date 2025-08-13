import React, { use, useEffect, useState } from "react";
import Breadcrumb from "../components/CommonComponets/BreadCrumb";
import Container from "../components/CommonComponets/Container";
import { useParams } from "react-router";
import { useGetSingleProduct } from "../hooks/UseFlashSaleOffer";
import InnerImageZoom from "react-inner-image-zoom";
import Star from "../components/CommonComponets/Star";

const ProductDeatils: React.FC = () => {
  const { id } = useParams();
  const [selectImage, setSelectImage] = useState<String>("");
  const { data, refetch, isPending, isError, error } = useGetSingleProduct(
    Number(id)
  );
  if (isError) {
    console.log(error);
  }

  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="grid grid-cols-2 gap-x-5 py-10!">
          <div className="left pb-70!">
            {/* image  */}
            <div className=" h-full border border-gray-200 rounded">
              {isPending ? (
                <div className="w-full h-[464px] m-10  ml-10! mt-5!">
                  <div className="w-[550px] h-[550px] bg-gray-200  animate-ping rounded"></div>
                </div>
              ) : (
                <div className="w-full h-[464px]  m-10!">
                  <InnerImageZoom
                    src={
                      isPending
                        ? ""
                        : `${selectImage ? selectImage : data?.images[0]}`
                    }
                    width={550}
                    height={600}
                    zoomPreload={true}
                    zoomType="click"
                    hideHint={false}
                    hideCloseButton={true}
                    moveType="pan"
                  />
                </div>
              )}
            </div>
            {/* image slider */}
            <div className="grid grid-cols-7   gap-x-1  mt-5!">
              {data?.images?.map((item) => (
                <div
                  className="w-[96px] h-[96px] rounded border border-gray-200 cursor-pointer"
                  onClick={() => setSelectImage(item)}
                >
                  <img src={item} alt={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="right h-full bg-gray-100">
            <div>
              <h1 className="body-small-500 text-gray-900 mb-4! flex items-center gap-x-1">
                <Star rating={data?.rating} />
                {data?.rating} Star Rating{" "}
                <span className="text-gray-600"> (21,671 User feedback)</span>
              </h1>

              {/* titlt */}
              <h1>
                <span className="body-xl-400 text-gray-900">{data?.title}</span>
              </h1>
              {/* info */}
              <div>
                <div className="grid grid-cols-2 mt-3! gap-y-3">
                  <p className="body-small-400 text-gray-600">
                    Sku{" "}
                    <span className="body-small-500 text-gray-900">
                      {data?.sku}
                    </span>
                  </p>
                  <p className="body-small-400 text-gray-600">
                    Availability{" "}
                    <span className="body-small-500 text-sucess-500">
                      {data?.availabilityStatus}
                    </span>
                  </p>
                  <p className="body-small-400 text-gray-600">
                    Availability{" "}
                    <span className="body-small-500 text-gray-600">
                      {data?.brand}
                    </span>
                  </p>
                  <p className="body-small-400 text-gray-600">
                    Availability{" "}
                    <span className="body-small-500 text-gray-600">
                      {data?.brand}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDeatils;
