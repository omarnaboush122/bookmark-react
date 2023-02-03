import { useState } from "react";


const Features = () => {
  const [tab,setTab] = useState("tab1");

  const tab1 = () => {
    setTab("tab1");
  }

  const tab2 = () => {
    setTab("tab2");
  }

  const tab3 = () => {
    setTab("tab3");
  }

  
  return (
    <section className="p-5 md:p-12">
    <div className="text-center">
      <h1 className="text-VeryDarkBlue text-3xl font-medium md:text-4xl">Features</h1>
      <p className="text-GrayishBlue text-base max-w-[600px] my-8 mx-auto md:text-lg lg:text-xl">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
    </div>
    <div className="relative flex flex-col max-w-4xl mx-auto lg:flex-row lg:border lg:border-b-gray-500">
      <button onClick={tab1} className={`relative py-4 text-GrayishBlue cursor-pointer w-72 mx-auto border-t border-t-gray-500 border-b border-b-gray-500 ${tab === "tab1" ? "active" : ""} transition-all duration-300 lg:text-xl lg:border-0`}>Simple Bookmarking</button>
      <button onClick={tab2} className={`relative py-4 text-GrayishBlue cursor-pointer w-72 mx-auto border-b border-b-gray-500 ${tab === "tab2" ? "active" : ""} transition-all duration-300 lg:text-xl lg:border-0`}>Speedy Searching</button>
      <button onClick={tab3} className={`relative py-4 text-GrayishBlue cursor-pointer w-72 mx-auto border-b border-b-gray-500 ${tab === "tab3" ? "active" : ""} transition-all duration-300 lg:text-xl lg:border-0`}>Easy Searching</button>
    </div>
    </section>
  );
}

export default Features;
