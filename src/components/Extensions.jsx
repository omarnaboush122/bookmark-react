

const Extensions = () => {
  return (
    <section className="p-5">
      <div className="max-w-[400px] mx-auto mb-8 text-center md:max-w-[500px] lg:max-w-[600px]">
        <h1 className="text-2xl text-VeryDarkBlue font-medium sm:text-3xl md:text-4xl lg:text-5xl">Download the extension</h1>
        <p className="text-GrayishBlue mt-4 sm:text-lg md:text-xl lg:mt-6">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <article className="card bg-white p-8 my-10 w-80 mx-auto h-[450px] text-center shadow-2xl rounded-xl lg:mr-10 lg:ml-0">
          <img src="./images/logo-chrome.svg" alt="logo-chrome" className="mt-10 mx-auto" />
          <h3 className="mt-10 mb-3 text-VeryDarkBlue text-2xl font-medium">Add To Chrome</h3>
          <p className="text-GrayishBlue">Minimum version 62</p>
          <button className="mt-20 bg-SoftBlue text-white px-7 py-3 rounded-md border hover:bg-white hover:text-SoftBlue hover:border-SoftBlue transition-all duration-300">Add & Install Extension</button>
        </article>
        <article className="card bg-white p-8 my-10 w-80 mx-auto h-[450px] text-center shadow-2xl rounded-xl lg:mr-10 lg:ml-0 lg:mt-24">
          <img src="./images/logo-firefox.svg" alt="logo-firefox" className="mt-10 mx-auto" />
          <h3 className="mt-10 mb-3 text-VeryDarkBlue text-2xl font-medium">Add to Firefox</h3>
          <p className="text-GrayishBlue">Minimum version 55</p>
          <button className="mt-20 bg-SoftBlue text-white px-7 py-3 rounded-md border hover:bg-white hover:text-SoftBlue hover:border-SoftBlue transition-all duration-300">Add & Install Extension</button>
        </article>
        <article className="card bg-white p-8 my-10 w-80 mx-auto h-[450px] text-center shadow-2xl rounded-xl lg:mr-0 lg:ml-0 lg:mt-36">
          <img src="./images/logo-opera.svg" alt="logo-opera" className="mt-10 mx-auto" />
          <h3 className="mt-10 mb-3 text-VeryDarkBlue text-2xl font-medium">Add To Opera</h3>
          <p className="text-GrayishBlue">Minimum version 46</p>
          <button className="mt-20 bg-SoftBlue text-white px-7 py-3 rounded-md border hover:bg-white hover:text-SoftBlue hover:border-SoftBlue transition-all duration-300">Add & Install Extension</button>
        </article>
      </div>
    </section>
  );
}

export default Extensions;
