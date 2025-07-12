import React from "react";
import { assets } from "../../../helpers/AssetProvider";
import Button from "../../CommonComponets/Button";

const NewsLetter = () => {
  return (
    <div>
      <div className="bg-secondary-700 flex justify-center items-center py-10!">
        <div className="py-10! px-5! flex flex-col items-center w-1/3 gap-y-4">
          <h1 className="heading2 text-gray-00">Subscribe to our newsletter</h1>
          <p className="body-medium-200 text-gray-00 text-center">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="relative w-full mt-7!">
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-00 w-full py-4! rounded px-3! outline-0"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-[2%]">
              <Button className="bg-primary-500 px-8! text-gray-00  heading7 rounded shadow-2xl py-2! cursor-pointer hover:bg-warning-400 transition-all">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="mt-6!">
            <img src={assets.newsletter} alt={"newsletter"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsLetter);
