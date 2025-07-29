"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const usePathName = usePathname();

  return (
    <header
      className={`fixed top-0 z-[9999] w-full transition-all duration-300 bg-[#0b001a]/80 backdrop-blur-md shadow-lg`}
    >
      <div className="container px-6 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={45}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/images/logo/logo-2.png"
            alt="logo"
            width={45}
            height={40}
            className="hidden dark:block"
          />
         
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center justify-center rounded-full bg-gradient-to-r from-[#1b002d] via-purple-700/40 to-[#1b002d] px-6 py-2 shadow-inner">
          <nav className="flex space-x-8 text-white text-sm">
            {menuData.map((menuItem, index) => (
              <div key={index} className="relative group">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={`hover:text-cyan-400 transition-all duration-200 ${
                      usePathName === menuItem.path ? "text-cyan-400" : ""
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="flex items-center hover:text-cyan-400 transition-all duration-200"
                    >
                      {menuItem.title}
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg dark:bg-gray-900 py-2 z-50 ${
                        openIndex === index ? "block" : "hidden"
                      }`}
                    >
                      {menuItem.submenu.map((submenuItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={submenuItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4 d-none">
       <p className="text-center text-base font-medium text-body-color">
  {" "}
  <a
    href="https://frontend.bravebposubs.com/"
    className="text-primary hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    Sign in
  </a>
</p>
          <Link
            href="/signup"
            className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition"
          >
            Sign Up
          </Link>
          <ThemeToggler />
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={navbarToggleHandler}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden px-6 py-4 bg-[#030014] border-t border-gray-700">
          <ul className="space-y-4">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className="block text-gray-300 hover:text-cyan-400"
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <div>
                    <p className="text-gray-300 font-medium">
                      {menuItem.title}
                    </p>
                    <ul className="mt-2 ml-4 space-y-2">
                      {menuItem.submenu.map((submenuItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={submenuItem.path}
                            className="block text-sm text-gray-400 hover:text-cyan-400"
                          >
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
