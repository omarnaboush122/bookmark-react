import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-VeryDarkBlue p-12 lg:px-20 lg:py-16 lg:flex-row lg:justify-between">
      <img
        src="./images/logo-bookmark.svg"
        alt="logo"
        className="img-filter w-48 mb-12 lg:mb-0"
      />
      <div className="flex flex-col items-center text-white lg:flex-row lg:items-start">
        <Link to="features" smooth={true} duration={500} className="mb-10 uppercase cursor-pointer tracking-wide hover:text-SoftRed transition-colors duration-300 lg:text-xl lg:mb-0 lg:mr-10">
          Features
        </Link>
        <Link to="pricing" smooth={true} duration={500} className="mb-10 uppercase cursor-pointer tracking-wide hover:text-SoftRed transition-colors duration-300 lg:text-xl lg:mb-0 lg:mr-10">
          Pricing
        </Link>
        <Link to="contact" smooth={true} duration={500} className="mb-12 uppercase cursor-pointer tracking-wide hover:text-SoftRed transition-colors duration-300 lg:text-xl lg:mb-0 lg:mr-10">
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-12">
        <a href="#" className="text-white hover:text-SoftRed transition-colors duration-300">
          <FaFacebook size={40} />
        </a>
        <a href="#" className="text-white hover:text-SoftRed transition-colors duration-300">
          <FaTwitter size={40}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
