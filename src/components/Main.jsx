

const Main = () => {
  return (
    <section className="relative flex flex-col-reverse items-center py-8 px-6">
      <div className="mt-12 text-center max-w-sm mx-auto">
        <h1 className="text-VeryDarkBlue text-3xl font-medium my-8">A Simple Bookmark Manager</h1>
        <p className="text-GrayishBlue text-base mb-12">
        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div>
          <a href="#" className="text-white bg-SoftBlue text-sm font-medium p-4 rounded-md mr-4">Get it on Chrome</a>
          <a href="#" className="text-VeryDarkBlue text-sm font-medium bg-gray-300  p-4 rounded-md">Get it on Firefox</a>
        </div>
      </div>
      <div>
        <img src="./images/illustration-hero.svg" alt="illustration-hero" className="max-w-[94vw]"/>
        <div className="absolute right-0 top-20 bg-SoftBlue w-[80%] h-[33%] rounded-tl-full rounded-bl-full -z-10"></div>
      </div>
    </section>
  );
}

export default Main;
