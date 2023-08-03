import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/LOGO-ROCCO.png";
import { slide as Menu } from "react-burger-menu";

const NavBar = () => {
  const [modal, setModal] =
    React.useState(false);
  const handleMenu = () => {
    setModal(!modal);
  };

  return (
    <div className='bg-color1 flex fixed justify-between h-20 w-full border-color2 border-b-xsm z-10'>
      <div className='self-center ml-5'>
        <img
          src={Logo}
          className='w-11 h-11'
          alt='Logo'
        ></img>
      </div>
      <div className='self-center mr-5'>
        <div className='relative'>
          <Icon
            icon={
              modal
                ? "ic:outline-close"
                : "material-symbols:menu"
            }
            color={
              modal
                ? "#d9d9d9"
                : "#d9d9d9"
            }
            width='52'
            height='49'
            onClick={handleMenu}
            className='cursor-pointer'
          />
          {modal && (
            <Menu
              isOpen={modal}
              onClose={handleMenu}
              customBurgerIcon={false}
              customCrossIcon={false}
              className='mt-5 bg-color3 w-20 '
              width={"30%"}
            >
              <a
                id='home'
                className='menu-item text-color1 text-xl'
                href='/'
              >
                Home
              </a>
              {/* Add other menu items as needed */}
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
