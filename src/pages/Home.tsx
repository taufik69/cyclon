import Header from "../components/HomeComponents/Header/Index";
import Menu from "../components/HomeComponents/Menu/Index";
import TopNav from "../components/HomeComponents/TopNav/Index";
import Category from "../components/HomeComponents/Category/Index";
// import Banner from "../components/HomeComponents/Banner/Index";
import Slider from "../components/CommonComponets/Slider";
const Home = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <Menu />
      <div className="shadow">
        <Category />
      </div>
      {/* <Banner /> */}
      <Slider />
    </div>
  );
};

export default Home;
