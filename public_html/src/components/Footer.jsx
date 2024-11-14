import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Button, Input, Link } from "@mui/material";

import React from "react";

export const Footer = () => {
  return (
    <footer className='bg-[#f08e00] text-white font-poppins w-full'>
      <div className='container mx-auto px-4 py-8 md:py-12 max-w-6xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center'>
          <div className='space-y-4 flex flex-col items-center text-center'>
            <div className='flex items-center justify-center space-x-2'>
              <img
                src='https://res.cloudinary.com/di92lsbym/image/upload/v1731103698/LOGOAZULCUADRADO_1_t8n2j9.png'
                alt='Rocco Rental Logo'
                width={40}
                height={40}
              />
              <span className='font-bold text-xl'>Rocco Rental</span>
            </div>
            <p className='text-sm max-w-xs'>Soluciones de alquiler de equipos de construcción de alta calidad.</p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <h3 className='font-semibold text-lg mb-4'>Contacto</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='https://www.google.com/maps/search/Lainez+318,+Rosario,+Santa+Fe,+Argentina'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  Lainez 318
                </a>
              </li>
              <li>Rosario, Santa Fe, 2000</li>
              <li>
                <a href='tel:+543417121040' className='hover:underline'>
                  Teléfono: (341) 7121040
                </a>
              </li>
              <li>
                <a href='mailto:info@roccorental.com.ar' className='hover:underline'>
                  Email: info@roccorental.com.ar
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center text-center'>
            <h3 className='font-semibold text-lg mb-4'>Síguenos</h3>
            <div className='flex justify-center space-x-4'>
              <a href='https://www.facebook.com/roccorentalsrl/?locale=es_LA' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                <Facebook className='h-6 w-6' />
              </a>
              <a href='https://www.instagram.com/roccorentalsrl/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <Instagram className='h-6 w-6' />
              </a>
              <a href='https://www.linkedin.com/company/roccorental/?viewAsMember=true' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <LinkedIn className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-white text-center'>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Rocco Rental S.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
