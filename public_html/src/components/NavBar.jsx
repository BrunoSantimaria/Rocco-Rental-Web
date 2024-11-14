import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Logo from "../assets/LOGO-ROCCO.png";
import { Link } from "react-scroll";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [dropdown, setDropdown] = useState(false);

  const handleMenu = () => {
    setModal(!modal);
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setNavBg(scrollTop > 50 ? "#212529" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className='fixed flex justify-between  overflow-x-hidden overflow-y-hidden h-20 w-screen pt-12 pb-12 z-50 transition-colors duration-500'
      style={{ backgroundColor: navBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex self-center ml-6 md:ml-40 '>
        <Link to='title' smooth={true} onClick={modal ? handleMenu : ""} duration={700}>
          <img src={Logo} className='w-11 h-11 animate-fade-down animate-ease-in-out mt-2' alt='rocco rental logo' title='Rocco Rental Logo' />
        </Link>

        {/* Animated Section */}
        <motion.section
          className='text-lg text-color3 font-poppins font-bold ml-4 select-none hidden md:block'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        >
          <p className='font-extrabold text-2xl'>Rocco Rental S.R.L.</p>
          <p>Plataformas y herramientas</p>
        </motion.section>
      </div>

      <div className='flex '>
        <div className='self-center mr-5'>
          <Icon
            icon={modal ? "ic:outline-close" : "material-symbols:menu"}
            color={modal ? "#FCA311" : "#d9d9d9"}
            width='52'
            height='49'
            onClick={handleMenu}
            className='cursor-pointer text-color2 lg:hidden md:hidden'
          />
          <div className='text-color3 text-xl space-x-16 font-poppins hidden md:flex items-center mx-20'>
            <Link to='nosotros' smooth={true} duration={700} offset={-50}>
              <span className='cursor-pointer hover:text-color2 duration-700 hover:underline underline-offset-8'>Nosotros</span>
            </Link>

            {/* Dropdown for Products */}
            <div className='relative'>
              <span
                onClick={toggleDropdown}
                className='flex flex-row items-center cursor-pointer hover:text-color2 duration-700 hover:underline underline-offset-8'
              >
                Productos
                <IoMdArrowDropdown />
              </span>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className='absolute mt-2 w-52 bg-color3 text-color2 rounded-lg text-lg shadow-lg text-left'
                >
                  <Link to='productos' smooth={true} duration={700} offset={80} onClick={toggleDropdown}>
                    <p className='p-2 hover:bg-color2 hover:text-color1 cursor-pointer'>Andamio Eléctrico</p>
                  </Link>
                  <Link to='productos' smooth={true} duration={700} offset={80} onClick={toggleDropdown}>
                    <p className='p-2 hover:bg-color2 hover:text-color1 cursor-pointer'>Plataforma Tijera</p>
                  </Link>
                  <Link to='productos' smooth={true} duration={700} offset={80} onClick={toggleDropdown}>
                    <p className='p-2 hover:bg-color2 hover:text-color1 cursor-pointer'>Andamios Tubulares</p>
                  </Link>
                </motion.div>
              )}
            </div>

            <Link to='servicios' smooth={true} duration={700} offset={-50}>
              <span className='cursor-pointer hover:text-color2 duration-700 hover:underline underline-offset-8'>Servicios</span>
            </Link>

            <Link to='contacto' smooth={true} duration={700} offset={80}>
              <span className='cursor-pointer hover:text-color2 duration-700 hover:underline underline-offset-8'>Contacto</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          {modal && (
            <div className='w-screen animate-fade-down animate-ease-in-out h-fit mt-[17px] bg-color3 bg-opacity-90 backdrop-blur-sm absolute right-0'>
              <div className='flex-col ml-6 font-poppins text-2xl text-color1'>
                <p className='py-2 mt-5 cursor-pointer'>
                  <Link to='nosotros' smooth={true} duration={700} offset={-35} onClick={handleMenu}>
                    Nosotros
                  </Link>
                </p>
                <div className='w-4/5 h-0 border-gray-400 border-xsm'></div>

                {/* Products Section in Mobile */}
                <p className='py-2 cursor-pointer font-bold' onClick={toggleDropdown}>
                  Productos
                </p>
                {dropdown && (
                  <div className='flex flex-col ml-4 text-lg'>
                    <Link to='productos' smooth={true} duration={700} offset={-25} onClick={handleMenu}>
                      <p className='py-1'>Andamio Eléctrico</p>
                    </Link>
                    <Link to='productos' smooth={true} duration={700} offset={-25} onClick={handleMenu}>
                      <p className='py-1'>Plataforma Tijera</p>
                    </Link>
                    <Link to='productos' smooth={true} duration={700} offset={-25} onClick={handleMenu}>
                      <p className='py-1'>Andamios Tubulares</p>
                    </Link>
                  </div>
                )}

                <div className='w-3/5 h-0 border-gray-400 border-xsm'></div>
                <p className='py-2 cursor-pointer'>
                  <Link to='servicios' smooth={true} duration={700} offset={-25} onClick={handleMenu}>
                    Servicios
                  </Link>
                </p>
                <div className='w-3/5 h-0 border-gray-400 border-xsm'></div>
                <p className='py-2 font-bold mb-5 cursor-pointer'>
                  <Link to='contacto' smooth={true} duration={700} offset={-40} onClick={handleMenu}>
                    Contacto
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
