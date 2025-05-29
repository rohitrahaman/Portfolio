import { Menu } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="bg-gray-300">
      <nav className="flex justify-between items-center w-[95%] mx-auto">
        <div>
          <img className="w-14" src="./img/logo.png" alt="" />
        </div>
        <div className="lg:static absolute  top-[-100%] w-full lg:w-auto">
          <ul className="flex flex-col lg:flex-row items-center font-semibold gap-6 lg:gap-16">
            <li>
              <a className="hover:text-gray-500" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Experience
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Project
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <button className="bg-blue-200 text-black px-3 py-1 border border-gray-500 rounded-md hover:bg-blue-300">
              Resume
            </button>
          </div>
          <div className="hidden lg:block">
            <button className="bg-blue-200 text-black px-3 py-1 border border-gray-500 rounded-md hover:bg-blue-300">
              Hire Me
            </button>
          </div>
          <div className="cursor-pointer lg:hidden">
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
