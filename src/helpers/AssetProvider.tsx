import logo from "../assets/homepageAssets/log.png";
import Mainlogo from "../assets/homepageAssets/Logo.png";
import bannerOne from "../assets/homepageAssets/bannerSlider.png";
import bannertwo from "../assets/homepageAssets/bannerSlider2.png";
import bannerThree from "../assets/homepageAssets/bannerSlider3.png";

// type declaration
type Assets = {
  headerlogo: string;
  logo: string;
  bannerOne: string;
  bannertwo: string;
  bannerThree: string;
};

export const assets: Assets = {
  headerlogo: logo,
  logo: Mainlogo,
  bannerOne,
  bannertwo,
  bannerThree,
};
