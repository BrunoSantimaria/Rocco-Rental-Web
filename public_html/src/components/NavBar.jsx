import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/LOGO-ROCCO.png";
import { reveal as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
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
          alt='rocco rental logo'
        ></img>
      </div>
      <div className='flex'>
        <div className='self-center mr-5 '>
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
            className='cursor-pointer '
          />
          {modal && (
            <div
              className='w-screen animate-fade-down animate-ease-in-out
            h-fit mt-[17px] bg-color3 bg-opacity-90 backdrop-blur-sm absolute right-0'
            >
              <div className='flex-col ml-6 font-poppins text-2xl text-color1'>
                <p className='py-2 mt-5 cursor-pointer focus:text-color3'>
                  <Link
                    to='nosotros'
                    smooth={true}
                    duration={700}
                    offset={-35}
                  >
                    Nosotros
                  </Link>
                </p>
                <div className='w-4/5 h-0 border-gray-400 border-xsm'></div>
                <p className='py-2'>
                  <Link
                    to='productos'
                    smooth={true}
                    duration={700}
                    offset={-25}
                  >
                    Productos y
                    Servicios
                  </Link>
                </p>
                <div className='w-3/5 h-0 bg-color3 border-gray-400  border-xsm'></div>
                <p className='py-2'>
                  Galeria de imagenes
                </p>
                <div className='w-2/5 h-0 bg-color1 border-gray-400  border-xsm'></div>

                <p className='py-2 font-bold mb-5'>
                  <Link
                    to='contacto'
                    smooth={true}
                    duration={700}
                    offset={-40}
                  >
                    Contacto
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
