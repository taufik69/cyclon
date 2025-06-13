import logo from "../assets/homepageAssets/log.png";
import Mainlogo from "../assets/homepageAssets/Logo.png";
import bannerOne from "../assets/homepageAssets/bannerSlider.png";
import bannertwo from "../assets/homepageAssets/bannerSlider2.png";
import bannerThree from "../assets/homepageAssets/bannerSlider3.png";
import creditCart from "../assets/homepageAssets/CreditCard.png";
import haedphone from "../assets/homepageAssets/Headphones.png";
import pakage from "../assets/homepageAssets/Package.png";
import Tropy from "../assets/homepageAssets/Trophy.png";
import categoryOne from "../assets/homepageAssets/categroy1.png";

// type declaration
type Assets = {
  [key: string]: string;
};

export const assets: Assets = {
  headerlogo: logo,
  logo: Mainlogo,
  bannerOne,
  bannertwo,
  bannerThree,
  creditCart,
  haedphone,
  pakage,
  Tropy,
  categoryOne,
};
