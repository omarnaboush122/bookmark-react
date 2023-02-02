

const Main = () => {
  return (
    <section className="relative py-8 px-6">
    <div className="container flex flex-col-reverse items-center">
        <div className="mt-12 text-center max-w-sm mx-auto sm:max-w-lg">
        <h1 className="text-VeryDarkBlue text-3xl font-medium my-8 sm:text-4xl">A Simple Bookmark Manager</h1>
        <p className="text-GrayishBlue text-base mb-10 sm:text-lg">
        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div>
          <a href="#" className="text-white bg-SoftBlue text-sm p-4 rounded-md mr-4 shadow-md sm:text-lg sm:px-6 sm:mr-5">Get it on Chrome</a>
          <a href="#" className="text-VeryDarkBlue text-sm bg-gray-300 p-4 rounded-md shadow-md sm:text-lg sm:px-6">Get it on Firefox</a>
        </div>
      </div>
      <div>
        <img src="./images/illustration-hero.svg" alt="illustration-hero" className="max-w-[94vw]"/>
        <div className="absolute right-0 top-20 bg-SoftBlue w-[80%] h-[33%] rounded-tl-full rounded-bl-full -z-10 sm:h-[45%] sm:top-28"></div>
      </div>
    </div>
    </section>
  );
}

export default Main;
