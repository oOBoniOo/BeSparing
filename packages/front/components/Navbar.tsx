/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import {useState} from 'react';

const NavLink = ({to, children})=>
  (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );


const MobileNav = ({open, setOpen}) => {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center h-20 bg-white filter drop-shadow-md"> {/* logo container*/}
        <a className="text-xl font-semibold" href="/">LOGO</a>
      </div>
      <div className="flex flex-col ml-4">
        <a className="my-4 text-xl font-medium" href="/about" onClick={() => setTimeout(() => {
          setOpen(!open);
        }, 100)}>
                  About
        </a>
        <a className="my-4 text-xl font-normal" href="/contact" onClick={() => setTimeout(() => {
          setOpen(!open);
        }, 100)}>
                  Contact
        </a>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center h-20 px-4 py-4 bg-white filter drop-shadow-md">
      <MobileNav open={open} setOpen={setOpen}/>
      <div className="flex items-center w-3/12">
        <a className="text-2xl font-semibold" href="/">LOGO</a>
      </div>
      <div className="flex items-center justify-end w-9/12">

        <div className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden" onClick={() => {
          setOpen(!open);
        }}>
          {/* hamburger button */}
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''}`} />
        </div>

        <div className="hidden md:flex">
          <Link href="/contact">
                          CONTACT
          </Link>
          <Link href="/about">
                          ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
