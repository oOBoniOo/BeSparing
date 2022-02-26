/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import MenuItems from './menuItems';
import Link from 'next/link';
import piggy from '../../public/piggy.png';
import Image from 'next/image';
import { LoginButton, LoginButtonMobile } from './LoginButton';
import { MenuLinks } from './MenuLinks';

const Navbar = () => {
  useEffect(() => {
    const btn = document.querySelector('button.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }, []);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
              <Link href="/">
                <div className="inline-block w-12 h-12 p-2 m-2 cursor-pointer ">
                  <Image src={piggy} alt="Logo" width={60} height={60} />
                </div>
              </Link>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="items-center hidden space-x-1 md:flex">
              <MenuLinks />
            </div>
          </div>
          <div className="items-center hidden space-x-3 md:flex ">
            <LoginButton />
          </div>
          {/* <!-- Secondary Navbar items --> */}

          {/* <!-- Mobile menu button --> */}
          <div className="flex items-center md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-rose-400"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block px-2 py-4 text-sm font-semibold text-gray-500 bg-rose-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/gasolina"
              className="block px-2 py-4 text-sm text-gray-500 transition duration-300 hover:bg-rose-300"
            >
              Ahorra en gasolina
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-2 py-4 text-sm text-gray-500 transition duration-300 hover:bg-rose-300"
            >
              Ahorra en electicidad
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-2 py-4 text-sm text-gray-500 transition duration-300 hover:bg-rose-300"
            >
              Contacto
            </a>
          </li>
          <li>
            <LoginButtonMobile />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
