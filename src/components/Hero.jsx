

const Main = () => {
  return (
    <section className="relative py-8 px-5 lg:py-20 lg:px-16">
    <div className="flex flex-col-reverse items-center w-full lg:flex-row lg:justify-between lg:items-start lg:mt-12">
        <div className="text-center max-w-sm mx-auto sm:max-w-lg lg:max-w-xl lg:w-1/2 lg:text-left">
        <h1 className="text-VeryDarkBlue text-3xl font-medium my-8 max-w-xl sm:text-4xl lg:text-5xl">A Simple Bookmark Manager</h1>
        <p className="text-GrayishBlue text-base mb-12 max-w-lg sm:text-lg">
        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div>
          <a href="#" className="text-white bg-SoftBlue text-sm p-4 border rounded-md mr-4 shadow-md sm:text-lg sm:px-6 sm:mr-5 hover:bg-white hover:text-SoftBlue hover:border-SoftBlue transition-all duration-300">Get it on Chrome</a>
          <a href="#" className="text-VeryDarkBlue text-sm bg-gray-300 p-4 border rounded-md shadow-md sm:text-lg sm:px-6 hover:bg-white hover:border-VeryDarkBlue transition-all duration-300">Get it on Firefox</a>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src="./images/illustration-hero.svg" alt="illustration-hero" className="lg:w-[700px]"/>
        <div className="absolute right-0 top-20 bg-SoftBlue w-[80%] h-[33%] rounded-tl-full rounded-bl-full -z-10 sm:h-[45%] sm:top-28 lg:w-[37%] lg:h-[54%] lg:top-60"></div>
      </div>
    </div>
    </section>
  );
}

export default Main;
