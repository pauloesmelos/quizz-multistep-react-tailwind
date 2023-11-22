import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GlobalContextSlide } from '../GlobalContext/GlobalContextSlide';

const ButtonReset = ({ children }) => {
  const { setSlideActive } = React.useContext(GlobalContextSlide);
  return (
    <NavLink 
    className="p-2 bg-[#fff] text-[#593cfb] rounded-md font-bold my-8 w-full max-w-[120px] text-center
    hover:bg-[#593cfb] hover:text-[#fff] duration-500 flex justify-center items-center gap-5 shadow-md"
    to="/"
    onClick={() => setSlideActive(0)}
    >
        {children}
        <FaHome />
    </NavLink>
  )
}

export default ButtonReset;