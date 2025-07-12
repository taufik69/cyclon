import React, { useState } from "react";
import Container from "./Container";
import { assets } from "../../helpers/AssetProvider";
import { useCategoryData } from "../../hooks/UseCategory";
import { motion, useScroll } from "motion/react";
interface footerLink {
  title: string;
  id: number;
  slug: string;
}
const Footer = () => {
  const { data } = useCategoryData();
  const [links] = useState<footerLink[]>([
    {
      title: "Shop Product",
      id: 1,
      slug: "shop-product",
    },
    {
      title: "Shoping Cart",
      id: 2,
      slug: "shoping-cart",
    },
    {
      title: "wishlist",
      id: 3,
      slug: "wishlist",
    },
    {
      title: "Compare",
      id: 4,
      slug: "compare",
    },
    {
      title: "Track Order",
      id: 5,
      slug: "track-order",
    },
    {
      title: "Customer Help",
      id: 6,
      slug: "customer-help",
    },
    {
      title: "About Us",
      id: 7,
      slug: "about-us",
    },
  ]);
  const [tag] = useState<{ tag: string }[]>([
    { tag: "Game" },
    { tag: "iPhone" },
    { tag: "TV" },
    { tag: "Asus Laptops" },
    { tag: "Macbook" },
    { tag: "SSD" },
    { tag: "Graphics Card" },
    { tag: "Power Bank" },
    { tag: "Smart TV" },
    { tag: "Speaker" },
    { tag: "Tablet" },
    { tag: "Microwave" },
    { tag: "Samsung" },
  ]);
  return (
    <div className="">
      <div className="bg-gray-900 py-10!">
        <Container>
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-x-3.5 py-16!">
            <div>
              <img src={assets.FooterLogo} alt={assets.FooterLogo} />
              <div className="py-5! ">
                <span className="body-medium-400 text-gray-500 mb-2!">
                  Customer Supports:
                </span>
                <br />
                <a
                  className="body-large-400 text-gray-00 mb-2!"
                  href="tel:(629) 555-0129"
                >
                  (629) 555-0129
                </a>
                <address className="body-large-400 text-gray-300 mb-2!">
                  4517 Washington Ave. <br /> Manchester, Kentucky 39495
                </address>
                <a
                  href="mailto:info@kinbo.com"
                  className="body-medium-500 text-gray-00 "
                >
                  info@kinbo.com
                </a>
              </div>
            </div>
            <div>
              <div>
                <h1 className="label1 text-gray-00">Top Category</h1>
                <ul className="flex flex-col gap-y-2 mt-[18px]!">
                  {data?.slice(0, 7).map((item, index) => (
                    <motion.li
                      key={index}
                      className=" body-large-400 text-gray-400 capitalize cursor-pointer hover:text-gray-00 transition-all"
                    >
                      {item}
                    </motion.li>
                  ))}
                  <li className="body-medium-400 text-gray-300">
                    Browse All product {"-->"}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h1 className="label1 text-gray-00">Top Category</h1>
                <ul className="flex flex-col gap-y-2 mt-[18px]!">
                  {links?.map((item) => (
                    <motion.li
                      key={item.id}
                      className=" body-large-400 text-gray-400 capitalize cursor-pointer hover:text-gray-00 transition-all"
                    >
                      {item.title}
                    </motion.li>
                  ))}
                  <li className="body-medium-400 text-gray-300">
                    Browse All product {"-->"}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="label1 text-gray-00">Download APP</h1>
              <div className="grid grid-rows-2 gap-y-8 mt-6!">
                <img
                  src={assets.android}
                  alt={assets.FooterImage}
                  className="w-full cursor-pointer"
                />
                <img
                  src={assets.apple}
                  alt={assets.FooterImage}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h1 className="label1 text-gray-00">Tags</h1>
              <div className="flex flex-wrap gap-x-1.5 gap-y-4 mt-6!">
                {tag?.map((item, index) => (
                  <motion.div
                    key={index}
                    className="body-medium-400 px-3! py-2! border-2 border-gray-800 text-gray-400 cursor-pointer hover:text-gray-00 transition-all hover:bg-gray-600 rounded"
                  >
                    {item.tag}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* footer bottom */}
      <div className="bg-gray-900 py-5! border-t border-t-gray-500 flex items-center justify-center">
        <p className="body-medium-400 text-gray-400">
          Kinbo - eCommerce Template © 2025. Design by Templatecookie modify by
          mern2403/mern2404
        </p>
      </div>
    </div>
  );
};

export default React.memo(Footer);
