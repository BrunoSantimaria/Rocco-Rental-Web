import React from "react";

import Logo from "../assets/LOGO-ROCCO.png";
const NavBar = () => {
  return (
    <div className='bg-color1 flex h-20 w-screen border-color2 border-b-2'>
      <div className='self-center ml-5 place-content-center'>
        <img
          src={Logo}
          className='w-11 h-11'
        ></img>
      </div>
    </div>
  );
};

export default NavBar;
