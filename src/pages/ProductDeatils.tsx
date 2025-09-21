import React, { useState } from "react";
import Breadcrumb from "../components/CommonComponets/BreadCrumb";
import Container from "../components/CommonComponets/Container";
import { useParams } from "react-router";
import { useGetSingleProduct } from "../hooks/UseFlashSaleOffer";
import InnerImageZoom from "react-inner-image-zoom";
import Star from "../components/CommonComponets/Star";
import FeatrureProductError from "../Error/FeatrureProductError";
import { FaHeart, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import card from "../assets/App1.png";

const ProductDeatils: React.FC = () => {
  const { id } = useParams();
  const [selectImage, setSelectImage] = useState<String>("");
  const { data, refetch, isPending, isError, error } = useGetSingleProduct(
    Number(id)
  );
  if (isError || error) {
    <FeatrureProductError message="" onRetry={() => refetch()} />;
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
          <div className="right h-full ">
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
              {/* price */}
              <div className="flex items-center gap-x-3 mt-6! pb-6! border-b-2 border-b-gray-200">
                <h2 className="heading3 text-secondary-500">$1699</h2>
                <h2 className="bodyd-small-400 text-gray-900 line-through">
                  $1999.00
                </h2>
                <span className="px-2! py-2.5! rounded bg-warning-400 body-small-600 text-gray-900">
                  21% OFF
                </span>
              </div>
              {/* variant part */}
              <div className="grid grid-cols-2 gap-y-5 grid-rows-2 gap-x-7 mt-6!">
                <div>
                  <h2 className="mb-2! body-small-200 text-gray-900">Color</h2>
                  <div className="flex items-center gap-x-3">
                    <div className="w-[34px] h-[34px] rounded-full bg-gray-300   border-5 border-gray-100"></div>
                    <div className="w-[34px] h-[34px] rounded-full bg-gray-300   border-5 border-gray-100"></div>
                  </div>
                </div>
                <div>
                  <h2 className="mb-2! body-small-200 text-gray-900">Size</h2>
                  <select
                    className="w-full border-2 border-gray-200 focus:outline-0 text-gray-700 body-medium-400 px-1! py-3! rounded"
                    name=""
                    id=""
                  >
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
                <div>
                  <h2 className="mb-2! body-small-200 text-gray-900">Memory</h2>
                  <select
                    className="w-full border-2 border-gray-200 focus:outline-0 text-gray-700 body-medium-400 px-1! py-3! rounded"
                    name=""
                    id=""
                  >
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
                <div>
                  <h2 className="mb-2! body-small-200 text-gray-900">
                    Storage
                  </h2>
                  <select
                    className="w-full border-2 border-gray-200 focus:outline-0 text-gray-700 body-medium-400 px-1! py-3! rounded"
                    name=""
                    id=""
                  >
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
              </div>
              {/* add to cart */}
              <div className="space-y-5 mt-10!">
                {/* Quantity & Buttons */}
                <div className="flex items-center gap-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button className="px-3! py-2! text-xl">−</button>
                    <span className="px-4! py-2! body-medium-500">01</span>
                    <button className="px-3! py-2! text-xl">+</button>
                  </div>

                  {/* Add to Cart */}
                  <button className="bg-primary-500 text-white px-10! py-3! rounded-md flex items-center gap-2 body-medium-600 hover:bg-primary-600 cursor-pointer transition">
                    ADD TO CART
                  </button>

                  {/* Buy Now */}
                  <button className="border border-primary-500 text-primary-500 px-6! py-3! rounded-md body-medium-600 hover:bg-primary-50 transition cursor-pointer ">
                    BUY NOW
                  </button>
                </div>

                {/* Wishlist & Compare */}
                <div className="flex items-center gap-6 text-gray-600 body-small-500 mt-5!">
                  <button className="flex items-center gap-2 hover:text-color-primary-500">
                    <FaHeart size={16} /> Add to Wishlist
                  </button>
                  <button className="flex items-center gap-2 hover:text-color-primary-500">
                    <BiRefresh size={18} /> Add to Compare
                  </button>
                  <div className="flex items-center gap-2">
                    <span>Share product:</span>
                    <FiShare2
                      size={16}
                      className="cursor-pointer hover:text-color-primary-500"
                    />
                    <FaFacebookF
                      size={16}
                      className="cursor-pointer hover:text-blue-500"
                    />
                    <FaTwitter
                      size={16}
                      className="cursor-pointer hover:text-sky-400"
                    />
                    <FaPinterestP
                      size={16}
                      className="cursor-pointer hover:text-red-500"
                    />
                  </div>
                </div>

                {/* Secure Checkout */}
                <div className="border border-gray-200 rounded-md mt-10! p-3!">
                  <p className="body-small-500 mb-2!">
                    100% Guarantee Safe Checkout
                  </p>
                  <img src={card} alt="Payment Methods" className="h-6 " />
                </div>
              </div>
            </div>
            {/* tabs */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDeatils;
