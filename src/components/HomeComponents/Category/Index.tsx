import React, { useState } from "react";
import Container from "../../CommonComponets/Container";
import { icons } from "../../../helpers/IconsProver";

const Category = () => {
  const [categoryOpen, setCategoryOpen] = useState<Boolean>(false);
  const orderItem: { id: number; name: string; icon: React.ReactNode }[] = [
    {
      id: 1,
      name: "Track Order",
      icon: icons.location ?? null,
    },
    {
      id: 2,
      name: "Compare",
      icon: icons.compare ?? null,
    },
    {
      id: 3,
      name: "Customer Support",
      icon: icons.support ?? null,
    },
    {
      id: 4,
      name: "Need Help",
      icon: icons.help ?? null,
    },
  ];

  return (
    <div>
      <Container>
        <div className="!py-3.5 grid grid-cols-2 items-center ">
          <div className="flex items-center gap-x-8">
            {/* category */}
            <div className=" relative">
              <select
                name="category"
                id="category"
                className="bg-gray-50 body-small-400 px-8! !py-3 appearance-none rounded outline-none cursor-pointer"
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                <option className="bg-gray-50 body-small-400" value="Mobile">
                  All Category
                </option>
                <option value="Laptop" className="bg-gray-50 body-small-400">
                  Laptop
                </option>
                <option value="Tablet" className="bg-gray-50 body-small-400">
                  Tablet
                </option>
                <option value="Camera">Camera</option>
                <option value="Accessories">Accessories</option>
              </select>
              <span className="absolute top-1/2 -translate-1/2 left-[7.5%]">
                {categoryOpen ? icons.up : icons.down}
              </span>
            </div>
            {/* order item */}
            <div className="flex items-center gap-x-4">
              {orderItem?.map((item) => (
                <div
                  className=".body-small-400 text-gray-600 flex items-center gap-x-1 cursor-pointer hover:text-warning-500 transition-all"
                  key={item.id}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="body-small-400">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* contact section */}
          <div className="flex items-center gap-x-3 justify-self-end ">
            <span>{icons.call}</span>
            <span className="body-large-400 text-gray-600">
              +1-202-555-0104
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Category) || Category;
