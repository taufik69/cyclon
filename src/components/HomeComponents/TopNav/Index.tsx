import React, { useState } from "react";
import Container from "../../CommonComponets/Container";
import { icons } from "../../../helpers/IconsProver";
const TopNav = () => {
  const [topNav] = useState([
    icons.twitter,
    icons.facebook,
    icons.pinterest,
    icons.reddit,
    icons.youtube,
    icons.instagram,
  ]);
  return (
    <div className="bg-secondary-700 py-5!">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <h1 className="body-small-400 text-gray-00">
            Welcome to Clicon online eCommerce store.{" "}
          </h1>
          <div className="grid justify-end">
            <div className="grid  auto-cols-max grid-flow-col gap-x-4 items-center  body-small-400 text-gray-00">
              Follow us
              <div className="grid grid-cols-6 gap-x-3">
                {topNav?.map((icons, index) => (
                  <span
                    className="text-[16px] hover:text-warning-500 cursor-pointer hover:scale-110 transition-all"
                    key={index}
                  >
                    {icons}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(TopNav) || TopNav;
