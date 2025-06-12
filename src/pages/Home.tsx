import Header from "../components/HomeComponents/Header/Index";
import Menu from "../components/HomeComponents/Menu/Index";
import TopNav from "../components/HomeComponents/TopNav/Index";
import Category from "../components/HomeComponents/Category/Index";
import Banner from "../components/HomeComponents/Banner/Index";
const Home = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <Menu />
      <div className="shadow">
        <Category />
      </div>
      <Banner />
    </div>
  );
};

export default Home;
