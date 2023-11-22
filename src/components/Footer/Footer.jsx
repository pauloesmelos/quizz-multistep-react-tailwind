import React from 'react';
import { GlobalContextSlide } from '../GlobalContext/GlobalContextSlide';

const Footer = () => {
  const { slideActive } = React.useContext(GlobalContextSlide);
  return (
    <footer className={`${slideActive > 3 ? "hidden" :
    "p-6 text-center bg-[#593cfb] border-[#2651fc]/50 border-t-2 text-[.8rem]"}`}>
        <p className="text-[#fff] font-bold">
            &copy; 2023 - maked with React and Tailwind - 
            <a> paulo eduardo</a>
        </p>
    </footer>
  )
}

export default Footer;