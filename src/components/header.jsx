import { useState } from "react";
import img1 from "../../public/Artboard 1@4x-8 1.png";
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <header className="flex justify-around ">
        <nav className="flex items-center justify-between p-6 lg:px-8 gap-x-8" aria-label="Global">
        <img className="h-8 w-auto" src={img1} alt="img not found" />
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <GiHamburgerMenu size={20} />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Services
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Blog
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Us
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Join Our Team
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="border border-solid border-orange-500 bg-orange-500 rounded-md py-2 md:px-4 mt-2 md:mt-0 text-white text-xs flex gap-2 align-middle">
              Find your Therapist <FaArrowRight size={15} />
            </button>
          </div>
        </nav>

        {/* Side Menu for Small Screens */}
        <div className={`lg:hidden ${open ? "block" : "hidden"}`} role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Close menu</span>
                <img className="h-8 w-auto" src={img1} alt="img not found" />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={toggleMenu}>
                <IoMdClose size={20} />
              </button>
            </div>
            <div className="mt-6">
              <div className="space-y-2">
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Home
                </a>
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                 Services
                </a>
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                 About Us
                </a>
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                 Blog
                </a>
              </div>
              <div className="mt-6 d-flex justify-center">
              <button className="border border-solid border-orange-500 bg-orange-500 rounded-md py-2 md:px-4 mt-2 md:mt-0 text-white text-xs flex gap-2 ">
              Find your Therapist <FaArrowRight size={15} />
            </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
