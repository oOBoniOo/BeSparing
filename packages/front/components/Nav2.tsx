/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import MenuItems from './menuItems';
import Link from 'next/link';
import { useRouter } from 'next/router';
import piggy from '../public/piggy.png';
import Image from 'next/image';


const Nav2 = () => {
  const router = useRouter();
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
              <Link href="/">
                <div className='inline-block w-10 h-10 p-2 m-2 overflow-hidden rounded-full ring-4 ring-rose-200 ring-offset-4'>
                  <Image src={piggy} alt="Logo" width={50} height={50}/>
                </div>

              </Link>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="items-center hidden space-x-1 md:flex">
              {MenuItems.map((item, index) => {
                console.log(item.url);
                return (
                  <>
                    <Link href={item.url} key={index}>
                      <div
                        className={`className="px-2 py-4  font-semibold text-gray-500 transition duration-300 hover:text-green-500  ${
                        router.asPath === item.url ?
                        'text-primary-500' :
                        'text-secondary-300'
                        }`}
                      >
                        <div className="w-10 pb-2 mx-auto hover:text-primary-500">
                          {/* {item.icon} */}
                        </div>

                        <p className="mx-3 text-secondary-300">{item.label}</p>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          {/* <!-- Secondary Navbar items --> */}
          <div className="items-center hidden space-x-3 md:flex ">
            <a href="" className="px-2 py-2 font-medium text-gray-500 transition duration-300 rounded hover:bg-green-500 hover:text-white">Log In</a>
            <a href="" className="px-2 py-2 font-medium text-white transition duration-300 bg-green-500 rounded hover:bg-green-400">Sign Up</a>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="flex items-center md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
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
          <li className="active"><a href="index.html" className="block px-2 py-4 text-sm font-semibold text-white bg-green-500">Home</a></li>
          <li><a href="#services" className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">Services</a></li>
          <li><a href="#about" className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">About</a></li>
          <li><a href="#contact" className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500">Contact Us</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Nav2;
