import { AiOutlineClose } from "react-icons/ai";
import {FaFacebook,FaTwitter} from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative flex justify-between items-center px-8 py-12">
      <div>
        <img
          src="./images/logo-bookmark.svg"
          alt="logo-bookmark"
          className="cursor-pointer"
        />
      </div>
      <div>
        <img
          src="./images/icon-hamburger.svg"
          alt="icon-hamburger"
          className="cursor-pointer"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen bg-mobileBg text-2xl w-full py-12 px-8">
        <div className="flex justify-between items-center">
          <img
            src="./images/logo-bookmark.svg"
            alt="logo-bookmark"
            className="img-filter w-40 cursor-pointer"
          />
          <AiOutlineClose className="text-gray-300 cursor-pointer" size={30} />
        </div>
        <nav className="mt-12 flex flex-col items-center">
          <a href="#" className="py-6 border-t border-t-mobileBorder w-full text-gray-300 text-center uppercase">
            features
          </a>
          <a href="#" className="py-6 border-t border-t-mobileBorder w-full text-gray-300 text-center uppercase">
            pricing
          </a>
          <a href="#" className="py-6 border-t border-b border-y-mobileBorder w-full text-gray-300 text-center uppercase mb-8">
            contact
          </a>
          <a href="#" className="py-4 border border-white w-full rounded-md text-gray-300 text-center uppercase">
            login
          </a>
        </nav>
        <div className="mt-40 flex justify-center items-center">
        <a href="#" className="text-gray-300 mr-12">
        <FaFacebook size={40}/>
        </a>
        <a href="#" className="text-gray-300">
          <FaTwitter size={40}/>
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
