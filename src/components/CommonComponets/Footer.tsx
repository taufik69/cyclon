import React from "react";
import Container from "./Container";
import { assets } from "../../helpers/AssetProvider";
import { useCategoryData } from "../../hooks/UseCategory";
import { motion } from "motion/react";
const Footer = () => {
  const { data } = useCategoryData();
  return (
    <div className=" mt-20!">
      <div className="bg-gray-900">
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
            <div className="">
              <div>
                <h1 className="label1 text-gray-00">Top Category</h1>
                <ul className="flex flex-col gap-y-2 mt-[18px]!">
                  {data?.slice(0, 5).map((item, index) => (
                    <motion.li
                      key={index}
                      className=" body-large-400 text-gray-400 capitalize"
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
            <div className="bg-gray-300">3</div>
            <div className="bg-gray-200">4</div>
            <div className="bg-gray-100">5</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default React.memo(Footer);
