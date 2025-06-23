import Header from "../components/HomeComponents/Header/Index";
import Menu from "../components/HomeComponents/Menu/Index";
import TopNav from "../components/HomeComponents/TopNav/Index";
import Category from "../components/HomeComponents/Category/Index";
import Banner from "../components/HomeComponents/Banner/Index";
import Features from "../components/HomeComponents/Features/Index";
import ShopByCategory from "../components/HomeComponents/ShopByCategory/Index";
import FeaturesProduct from "../components/HomeComponents/FeaturesProduct/Index";
import Arrival from "../components/HomeComponents/Arrival/Index";
import Offers from "../components/HomeComponents/Offers/Index";
const Home = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <Menu />
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
    </div>
  );
};

export default Home;
