import { useState } from "react";
import data from "../data.json";

const Features = () => {
  const [value, setValue] = useState(0);

  return (
    <section name="features" className="p-5 my-20 md:p-12">
      <div className="text-center">
        <h1 className="text-VeryDarkBlue text-3xl font-medium md:text-4xl lg:text-5xl">
          Features
        </h1>
        <p className="text-GrayishBlue max-w-[600px] my-8 mx-auto md:text-lg lg:text-xl">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="relative flex flex-col max-w-4xl mx-auto lg:flex-row lg:border-b lg:border-b-gray-500">
        {data.features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setValue(index)}
            className={`${
              index === value ? "active" : ""
            } relative py-4 text-GrayishBlue cursor-pointer w-72 mx-auto border-t border-t-gray-500 border-b border-b-gray-500  transition-all duration-300 lg:text-xl lg:border-0`}
          >
            {feature.name}
          </button>
        ))}
      </div>
      {data.features.map((feature, index) => {
        const { img, title, info } = feature;
        return (
          <article
            key={index}
            className={`mt-20 ${
              value === index ? "flex" : "hidden"
            } flex-col items-center lg:flex-row lg:w-[1000px] lg:h-[420px] lg:mx-auto`}
          >
            <div className="relative">
              <img className="w-[300px] sm:w-[500px]" src={img} alt={title} />
              <div className="absolute bg-SoftBlue h-52 w-[30rem] top-9 -left-60 -z-10 border-b rounded-br-full rounded-tr-full sm:w-[45rem] sm:h-[22rem] sm:-left-[20.5rem] md:[]"></div>
            </div>
            <div className="max-w-[400px] mx-auto text-center mt-24 sm:mt-32 lg:mt-0 lg:ml-16 lg:text-left lg:max-w-[480px]">
              <h1 className="text-2xl text-VeryDarkBlue font-medium sm:text-3xl lg:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-GrayishBlue sm:text-lg lg:text-xl lg:mb-8">
                {info}
              </p>
              <button className="hidden lg:block lg:text-white lg:bg-SoftBlue lg:py-3 lg:px-8 lg:rounded-md lg:border lg:shadow-md lg:hover:bg-white lg:hover:border-SoftBlue lg:hover:text-SoftBlue transition-all duration-300">
                More Info
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Features;
