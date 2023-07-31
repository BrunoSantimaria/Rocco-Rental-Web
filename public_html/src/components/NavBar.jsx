import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/LOGO-ROCCO.png";

const NavBar = () => {
  return (
    <div className='bg-color1 flex fixed justify-between h-20 w-full border-color2 border-b-xsm z-10'>
      <div className='self-center ml-5'>
        <img
          src={Logo}
          className='w-11 h-11'
        ></img>
      </div>
      <div className='self-center mr-5'>
        <Icon
          icon='material-symbols:menu'
          color='#d9d9d9'
          width='52'
          height='49'
        />
      </div>
    </div>
  );
};

export default NavBar;
