import Container from "../../CommonComponets/Container";
import { assets } from "../../../helpers/AssetProvider.tsx";
import Button from "../../CommonComponets/Button";
import { icons } from "../../../helpers/IconsProver.tsx";

const Header = () => {
  return (
    <div className="py-4! bg-gray-900">
      <Container>
        <div className="grid grid-cols-3">
          <div className="grid auto-cols-max grid-flow-col items-center gap-x-3">
            <img src={assets.headerlogo} alt="Logo" />
            <h1 className="heading3 text-gray-00 ml-2">Friday</h1>
          </div>
          <div className="grid justify-center auto-cols-max grid-flow-col items-center">
            <div className="grid auto-cols-max grid-flow-col items-center gap-x-2">
              <span className="body-small-500 text-gray-100">Up to</span>
              <h2 className="display4 text-warning-500">59%</h2>
              <span className="body-xl-600 text-gray-100">OFF</span>
            </div>
          </div>
          <div className=" flex items-center justify-end">
            <Button className="bg-warning-500 px-10! rounded shadow-2xl py-5 cursor-pointer hover:bg-warning-400 transition-all">
              <div className=" grid auto-cols-max grid-flow-col items-center gap-x-1">
                <span className="text-gray-900  heading4">Shop Now </span>
                <span className="text-gray-900 inline-block mt-1">
                  {icons.arrow}
                </span>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
