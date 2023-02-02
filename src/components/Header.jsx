import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
  return (
    <header className='relative flex justify-between items-center px-6 py-12'>
      <div>
        <img src="./images/logo-bookmark.svg" alt="logo-bookmark" className="cursor-pointer"/>
      </div>
      <div>
        <img src="./images/icon-hamburger.svg" alt="icon-hamburger" className="cursor-pointer" />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-screen bg-navMobile text-4xl w-full p-8">
      <div className="flex justify-between items-center">
      <img src="./images/logo-bookmark.svg" alt="logo-bookmark" className="img-filter w-40" />
        <AiOutlineClose className="text-gray-300 cursor-pointer" size={30}/>
      </div>
      <nav>
        <ul>
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
        <button>login</button>
      </nav>
      </div>

    </header>
  );
}

export default Header;
