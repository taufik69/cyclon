import Category from "../components/HomeComponents/Category/Index";
import Banner from "../components/HomeComponents/Banner/Index";
import Features from "../components/HomeComponents/Features/Index";
import ShopByCategory from "../components/HomeComponents/ShopByCategory/Index";
import FeaturesProduct from "../components/HomeComponents/FeaturesProduct/Index";
import Arrival from "../components/HomeComponents/Arrival/Index";
import Offers from "../components/HomeComponents/Offers/Index";
import NewsLetter from "../components/HomeComponents/Newsletter/Index";

const Home = () => {
  return (
    <div>
      <div className="shadow">
        <Category />
      </div>
      <div className="mb-20!">
        <Banner />
      </div>
      <div className="mt-20!">
        <Features />
      </div>
      <ShopByCategory />
      <div className="mt-10!">
        <FeaturesProduct />
      </div>
      <Arrival />
      <div>
        <Offers />
      </div>
      <div className="mt-20!">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
