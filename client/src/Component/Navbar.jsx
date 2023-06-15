import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeColor = () => {
    if (window.scrollY >= 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed w-screen h-20 z-20 flex justify-between items-center p-0 ${
        isScrolled ? 'bg-[#070936]' : 'bg-transparent'
      }`}
    >
      <div className="pl-[10px]">
        <img
          className="w-16"
          src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Logo"
        />
      </div>
      <div
        className={`text-white navlink md:static absolute md:min-h-fit min-h-[60vh] left-0 top-${
          isOpen ? '0' : '-100%'
        } md:w-auto w-full flex items-center px-5 transition-all duration-300`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-6">
          <li>
            <a className="hover:text-gray-500 font-bold text-lg" href="/about-us">
              Về chúng tôi
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold text-lg" href="/service">
              Dịch vụ
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold text-lg" href="/recruitment">
              Tuyển dụng
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold text-lg" href="/news">
              Tin tức
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 font-bold text-lg" href="/contact">
              Liên hệ
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <RxHamburgerMenu onClick={toggle} className="text-3xl cursor-pointer md:hidden px-10" />
      </div>
    </nav>
  );
};

export default NavBar;
