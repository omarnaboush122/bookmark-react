import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center p-8 sm:px-16 lg:px-32">
      <div>
        <img
          src="./images/logo-bookmark.svg"
          alt="logo-bookmark"
          className="lg:w-48 cursor-pointer"
        />
      </div>
      <div className="md:hidden">
        <img
          src="./images/icon-hamburger.svg"
          alt="icon-hamburger"
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center">
          <li className="mx-4 lg:mx-6">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="text-VeryDarkBlue text-base uppercase hover:text-SoftRed cursor-pointer transition-colors duration-300 md:text-lg"
            >
              features
            </Link>
          </li>
          <li className="mx-4 lg:mx-6">
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              className=" text-VeryDarkBlue text-base uppercase hover:text-SoftRed cursor-pointer transition-colors duration-300 md:text-lg"
            >
              pricing
            </Link>
          </li>
          <li className="mx-4 lg:mx-6">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className=" text-VeryDarkBlue text-base uppercase hover:text-SoftRed cursor-pointer transition-colors duration-300 md:text-lg"
            >
              contact
            </Link>
          </li>
          <li className="mx-4 lg:mx-6">
            <a
              href="#"
              className=" py-2 px-8 bg-SoftRed text-base text-white border uppercase rounded-md shadow-md hover:bg-white hover:border-SoftRed hover:text-SoftRed transition-all duration-300 md:text-lg"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="absolute top-0 bottom-0 left-0 right-0 h-screen bg-mobileBg text-2xl w-full py-12 px-8 z-50 sm:px-16 md:hidden">
          <div className="flex justify-between items-center">
            <img
              src="./images/logo-bookmark.svg"
              alt="logo-bookmark"
              className="img-filter w-40 cursor-pointer"
            />
            <div
              className="text-gray-300 cursor-pointer hover:text-SoftRed transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose size={30} />
            </div>
          </div>
          <nav className="mt-12 flex flex-col items-center">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="py-6 border-t border-t-mobileBorder w-full text-gray-300 text-center uppercase cursor-pointer hover:text-SoftRed transition-all duration-200"
            >
              features
            </Link>
            <Link
              smooth={true}
              duration={500}
              to="pricing"
              className="py-6 border-t border-t-mobileBorder w-full text-gray-300 text-center uppercase cursor-pointer hover:text-SoftRed transition-all duration-200"
            >
              pricing
            </Link>
            <Link
              smooth={true}
              duration={500}
              to="contact"
              className="py-6 border-t border-b border-y-mobileBorder w-full text-gray-300 text-center uppercase cursor-pointer mb-8 hover:text-SoftRed transition-all duration-200"
            >
              contact
            </Link>
            <a
              href="#"
              className="py-4 border border-white w-full rounded-md text-gray-300 text-center uppercase hover:text-SoftRed hover:border-SoftRed transition-all duration-200"
            >
              login
            </a>
          </nav>
          <div className="mt-32 flex justify-center items-center">
            <a
              href="#"
              className="text-gray-300 mr-12 hover:text-SoftRed transition-all duration-200"
            >
              <FaFacebook size={40} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-SoftRed transition-all duration-200"
            >
              <FaTwitter size={40} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
