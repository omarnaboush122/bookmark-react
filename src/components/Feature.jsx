

const Feature = () => {
  return (
    <article className={`mt-20 flex-col items-center lg:flex-row lg:w-[1000px] lg:h-[420px] lg:mx-auto`}>
      <div className="relative">
        <img className="w-[300px] sm:w-[500px]" src="./images/illustration-features-tab-1.svg" alt="illustration-features-tab-1" />
        <div className="absolute bg-SoftBlue h-52 w-[30rem] top-9 -left-60 -z-10 border-b rounded-br-full rounded-tr-full sm:w-[45rem] sm:h-[22rem] sm:-left-[20.5rem] md:[]"></div>
      </div>
      <div className="max-w-[400px] mx-auto text-center mt-24 sm:mt-32 lg:mt-0 lg:ml-16 lg:text-left lg:max-w-[480px]">
        <h1 className="text-2xl text-VeryDarkBlue font-medium sm:text-3xl lg:text-4xl">Bookmark in one click</h1>
        <p className="mt-4 text-GrayishBlue sm:text-lg lg:text-xl lg:mb-8">
        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
        </p>
        <button className="hidden lg:block lg:text-white lg:bg-SoftBlue lg:py-3 lg:px-8 lg:rounded-md lg:border lg:shadow-md lg:hover:bg-white lg:hover:border-SoftBlue lg:hover:text-SoftBlue transition-all duration-300">More Info</button>
      </div>
    </article>
  );
}

export default Feature;
