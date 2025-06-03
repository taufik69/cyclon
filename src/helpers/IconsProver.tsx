import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaCartShopping,
  FaUserAstronaut,
} from "react-icons/fa6";
import {
  FaPinterestP,
  FaReddit,
  FaInstagramSquare,
  FaRegHeart,
} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline, IoHelpCircleOutline } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import React from "react";

type Icons = {
  [key: string]: React.ReactNode;
};

export const icons: Icons = {
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  pinterest: <FaPinterestP />,
  reddit: <FaReddit />,
  youtube: <FaYoutube />,
  instagram: <FaInstagramSquare />,
  cart: <FaCartShopping />,
  heart: <FaRegHeart />,
  user: <FaUserAstronaut />,
  search: <IoIosSearch />,
  location: <IoLocationOutline />,
  compare: <GoGitCompare />,
  support: <MdOutlineSupportAgent />,
  help: <IoHelpCircleOutline />,
  call: <BsTelephonePlusFill />,
  arrow: <MdOutlineArrowRightAlt />,
};
