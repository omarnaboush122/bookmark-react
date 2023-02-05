import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-VeryDarkBlue p-12">
      <img
        src="./images/logo-bookmark.svg"
        alt="logo"
        className="img-filter w-48 mb-12"
      />
      <div className="flex flex-col items-center text-white">
        <a href="#" className="mb-10 uppercase tracking-wide text-base">
          Features
        </a>
        <a href="#" className="mb-10 uppercase tracking-wide text-base">
          Pricing
        </a>
        <a href="#" className="mb-10 uppercase tracking-wide text-base">
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-8">
        <a href="#" className="text-white hover:text-SoftRed">
          <FaFacebook size={40} />
        </a>
        <a href="#" className="text-white hover:text-SoftRed">
          <FaTwitter size={40}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
