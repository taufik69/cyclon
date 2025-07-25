import React, { useState } from "react";
import Breadcrumb from "../components/CommonComponets/BreadCrumb";
import Container from "../components/CommonComponets/Container";
import { useGetAllProduct } from "../hooks/UseFlashSaleOffer";
import Product from "../components/CommonComponets/Product";
import { useCategoryData } from "../hooks/UseCategory";
import RangeSlider from "react-range-slider-input";
import type { productDataType } from "../types/productapidata";
import { assets } from "../helpers/AssetProvider";
import Button from "../components/CommonComponets/Button";
import { icons } from "../helpers/IconsProver";
import Search from "../components/CommonComponets/Search";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { categoryWiseData } from "../api/Category";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const [value, setValue] = useState<[number, number]>([30, 60]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: categoryData } = useCategoryData();
  // category wise product
  const { data: categoryProduct, isPending: categoryPending } = useQuery({
    queryKey: ["categoryWiseProduct", selectedCategory],
    queryFn: () => categoryWiseData(selectedCategory),
    enabled: !!selectedCategory,
  });
  const { data, refetch, isPending, isError, error } = useGetAllProduct();
  const { data: allProduct } = useGetAllProduct();
  const [randomTagColor] = useState<string[]>([
    "primary-600",
    "primary-500",
    "secondary-200",
    "secondary-300",
    "sucess-300",
    "warning-600",
    "warning-300",
    "danger-600",
    "danger-300",
  ]);
  const [categoryOpen, setCategoryOpen] = useState<Boolean>(false);
  const [page, setpage] = useState<number>(1);
  const [pagePerShow] = useState<number>(24);
  let totalPage = data?.products?.length
    ? Math.ceil(data.products.length / pagePerShow)
    : 0;

  //   pagination funtionality
  const handlePerItem = (index: number) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setpage(index);
    }
  };

  const handleCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="grid grid-cols-[1fr_4fr] py-10! gap-x-10">
          {/* left side */}
          <div>
            <div className="border-b-2 pb-6! border-b-gray-100">
              <h1 className="label2 text-gray-900 capitalize">category</h1>
              <div className="h-[40vh] overflow-y-scroll scrollbar">
                <ul className="flex flex-col gap-y-2">
                  {categoryData?.map((item: string, index: number) => (
                    <div
                      onClick={() => handleCategory(item)}
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
              <h1 className="label2 text-gray-900 capitalize mb-4!">
                Price Range
              </h1>
              <div>
                <RangeSlider
                  id="range-slider-yellow"
                  value={value}
                  onInput={setValue}
                />
                <div className="mt-5! flex justify-between items-center gap-x-4">
                  <button className="cursor-pointer label3 text-gray-500 border-2 border-gray-100 grow py-2.5! rounded">
                    Min price
                  </button>
                  <button className="label3 text-gray-500 border-2 border-gray-100 grow py-2.5! rounded cursor-pointer">
                    Max price
                  </button>
                </div>
              </div>
            </div>
            {/* all price */}
            <div className="border-b-2 pb-6! border-b-gray-100 mt-5!">
              <h1 className="label2 text-gray-900 capitalize mb-4!">
                All Price
              </h1>
              <div>
                <div className="flex flex-col gap-y-2 mt-2!">
                  <div className="flex  items-center gap-x-2 mt-2!">
                    <input
                      type="radio"
                      id="All"
                      name="category"
                      className="w-3 h-3 cursor-pointer "
                    />
                    <label htmlFor="All" className="text-gray-700" id="All">
                      <li
                        id="All"
                        className="text-gray-700 body-medium-500  hover:text-gray-900 cursor-pointer capitalize"
                      >
                        All
                      </li>
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2!">
                    <input
                      type="radio"
                      id="All"
                      name="category"
                      className="w-3 h-3 cursor-pointer "
                    />
                    <label htmlFor="All" className="text-gray-700" id="All">
                      <li
                        id="All"
                        className="text-gray-700 body-medium-400 hover:text-gray-900 cursor-pointer capitalize"
                      >
                        Under $20
                      </li>
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2!">
                    <input
                      type="radio"
                      id="All"
                      name="category"
                      className="w-3 h-3 cursor-pointer "
                    />
                    <label htmlFor="All" className="text-gray-700" id="All">
                      <li
                        id="All"
                        className="text-gray-700 body-medium-400 hover:text-gray-900 cursor-pointer capitalize"
                      >
                        $25 to $100
                      </li>
                    </label>
                  </div>

                  <div className="flex items-center gap-x-2 mt-2!">
                    <input
                      type="radio"
                      id="All"
                      name="category"
                      className="w-3 h-3 cursor-pointer "
                    />
                    <label htmlFor="All" className="text-gray-700" id="All">
                      <li
                        id="All"
                        className="text-gray-700 body-medium-400 hover:text-gray-900 cursor-pointer capitalize"
                      >
                        $100 to $300
                      </li>
                    </label>
                  </div>

                  <div className="flex items-center gap-x-2 mt-2!">
                    <input
                      type="radio"
                      id="All"
                      name="category"
                      className="w-3 h-3 cursor-pointer "
                    />
                    <label htmlFor="All" className="text-gray-700" id="All">
                      <li
                        id="All"
                        className="text-gray-700 body-medium-400 hover:text-gray-900 cursor-pointer capitalize"
                      >
                        $300 to $500
                      </li>
                    </label>
                  </div>

                  <div className="flex items-center gap-x-2 mt-2!">
                    <input
                      type="radio"
                      id="All"
                      name="category"
                      className="w-3 h-3 cursor-pointer "
                    />
                    <label htmlFor="All" className="text-gray-700" id="All">
                      <li
                        id="All"
                        className="text-gray-700 body-medium-400 hover:text-gray-900 cursor-pointer capitalize"
                      >
                        $500 to $1,000
                      </li>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* popular brands  */}
            <div className="border-b-2 pb-6! border-b-gray-100 mt-5!">
              <h1 className="label2 text-gray-900 capitalize mb-4!">
                Popular Brands
              </h1>
              <div className="h-[34vh] overflow-y-scroll scrollbar">
                <ul className="grid grid-cols-2 gap-y-4">
                  {allProduct?.products
                    ?.slice(0, 13)
                    .map((item: productDataType) => (
                      <div
                        className="flex items-center gap-x-2 mt-2!"
                        key={item.id}
                      >
                        <input
                          type="checkbox"
                          id={item.brand}
                          name="category"
                          className="custom-checkbox w-3 h-3 cursor-pointer "
                        />
                        <label
                          htmlFor={item.brand}
                          className="text-gray-700"
                          id={item.brand}
                        >
                          <li
                            key={item.id}
                            id={item.brand}
                            className="text-gray-700 body-medium-400 hover:text-gray-900 cursor-pointer capitalize"
                          >
                            {item.brand.split(" ")[0]}
                          </li>
                        </label>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
            {/* popular Tags */}
            <div className="border-b-2 pb-6! border-b-gray-100 mt-5!">
              <h1 className="label2 text-gray-900 capitalize mb-4!">
                Popular Tags
              </h1>
              <div className="h-[30vh]">
                <ul className="flex flex-wrap gap-4">
                  {allProduct?.products
                    ?.slice(0, 20)
                    .map((item: productDataType) => (
                      <div className="flex items-center gap-x-2" key={item.id}>
                        <div
                          key={item.id}
                          id={item.brand}
                          className={`text-gray-700 border border-gray-200
                         rounded hover:bg-gray-100 bg-${
                           randomTagColor[
                             Math.floor(Math.random() * randomTagColor.length)
                           ]
                         }  transition-all px-2! py-1! body-medium-400 hover:text-gray-900 cursor-pointer capitalize grow`}
                        >
                          {item.title.split(" ")[0]}
                        </div>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
            {/* single product overview */}
            <div className="border-4 pb-6!  border-primary-100 mt-5! rounded">
              <div className=" flex  flex-col  gap-y-7 px-4! w-full justify-center">
                <img src={assets.singleProduct} alt="" />
                <img src={assets.singleProductContent} alt="" />
                <div className="flex flex-col gap-y-3">
                  <Button className="heading7 bg-primary-500 w-full text-gray-00 py-2! flex items-center justify-center gap-x-2 hover:bg-primary-600 transition-all cursor-pointer">
                    <span>{icons.cart}</span>
                    <span> Add to Cart</span>
                  </Button>

                  <Button className="heading7 border-2 border-primary-500 w-full text-primary-500 py-2! flex items-center justify-center gap-x-2  cursor-pointer">
                    <span> View Details</span>
                    <span>{icons.arrow}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div>
            <div className="grid grid-rows-[auto_auto_auto] gap-y-5 ">
              <div className="grid grid-cols-2">
                <div>
                  {/* search  */}
                  <Search className="relative">
                    <input
                      name="search"
                      type={"search"}
                      placeholder="Search for anything..."
                      className="border border-gray-100 body-small-400 w-full py-3! rounded text-gray-500 px-4! placeholder:body-small-400 pr-12! "
                    />

                    <span className="text-gray-400 text-2xl absolute top-2.5 right-4">
                      {icons.search}
                    </span>
                  </Search>
                </div>
                <div className="flex justify-end">
                  <div className="flex items-center gap-x-3">
                    {/* Sort by: */}
                    <h2 className="body-medium-400 text-gray-900">Sort by:</h2>
                    <div className="relative">
                      <select
                        name="category"
                        id="category"
                        className="border border-gray-100 body-small-400 px-20! !py-2 appearance-none rounded outline-none cursor-pointer"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                      >
                        <option
                          className="bg-gray-50 body-small-400"
                          value="Mobile"
                        >
                          Most Popular
                        </option>
                        <option
                          value="Laptop"
                          className="bg-gray-50 body-small-400"
                        >
                          Laptop
                        </option>
                        <option
                          value="Tablet"
                          className="bg-gray-50 body-small-400"
                        >
                          Tablet
                        </option>
                        <option value="Camera">Camera</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                      <span className="absolute top-1/2 -translate-1/2 left-[7.5%]">
                        {categoryOpen ? icons.up : icons.down}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1  bg-gray-50 py-4! px-4! rounded">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                      <h2 className="body-medium-400 text-gray-600">
                        Active Filters:
                      </h2>
                      <div className="flex gap-x-3">
                        <div className="flex items-center gap-x-1">
                          <span className="body-medium-400 text-gray-600">
                            Electronics Devices
                          </span>
                          <span className="text-gray-600 text-sm">
                            {icons.cross}
                          </span>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <span className="body-medium-400 text-gray-600">
                            5 Star Rating
                          </span>
                          <span className="text-gray-600 text-sm">
                            {icons.cross}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="body-medium-400 text-gray-600">
                        <span className="text-gray-900">65,867</span> Results
                        found.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Product
                  status={{
                    fulldataLoad: true,
                    isPending: selectedCategory ? categoryPending : isPending,
                    isError,
                    data:
                      selectedCategory === ""
                        ? data?.products?.slice(
                            page * 16 - 16, // 16
                            page * pagePerShow // 32
                          )
                        : categoryProduct?.products?.slice(
                            page * 16 - 16, // 16
                            page * pagePerShow // 32
                          ),
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
        {/* pagination */}
        <div className="py-10!">
          <div className="flex items-center justify-center gap-x-6">
            <div
              onClick={() => handlePerItem(page - 1)}
              className="w-10 text-2xl h-10 rounded-full border-2 border-gray-100 hover:bg-primary-600 cursor-pointer hover:text-gray-00  flex items-center justify-center"
            >
              <span>
                <MdOutlineKeyboardDoubleArrowLeft />
              </span>
            </div>
            <ul className="flex items-center gap-x-2">
              {[...Array(totalPage).keys()].map((item) => (
                <li
                  key={item}
                  className={
                    item + 1 == page
                      ? "w-10 h-10 rounded-full  hover:bg-gray-900  cursor-pointer bg-primary-500 text-gray-00 hover:text-gray-00 flex items-center justify-center"
                      : "w-10 h-10 rounded-full  hover:bg-primary-600 border-2 border-gray-100 cursor-pointer hover:text-gray-00 flex items-center justify-center"
                  }
                  onClick={() => handlePerItem(item + 1)}
                >
                  {item + 1}
                </li>
              ))}
            </ul>
            <div
              onClick={() => handlePerItem(page + 1)}
              className="w-10 h-10 text-2xl rounded-full border-2 border-gray-100 hover:bg-primary-600 cursor-pointer hover:text-gray-00 flex items-center justify-center"
            >
              <span>
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Shop);
