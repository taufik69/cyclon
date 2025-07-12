import React from "react";
import Header from "../HomeComponents/Header/Index";
import Menu from "../HomeComponents/Menu/Index";
import TopNav from "../HomeComponents/TopNav/Index";
import Footer from "../CommonComponets/Footer";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <TopNav />
        <Menu />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);
