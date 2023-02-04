

const Questions = () => {
  return (
    <section className="px-5 py-12 lg:mt-16">
      <div className="text-center max-w-sm mx-auto sm:max-w-lg lg:max-w-2xl">
        <h1 className="text-VeryDarkBlue text-3xl font-medium sm:text-4xl lg:text-5xl">Frequently Asked Questions</h1>
        <p className="text-GrayishBlue mt-5 mb-16 md:text-xl">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      <div className="w-full m-auto">
        <div className="py-8">
        <div className="flex justify-between items-center">
          <h3 className="text-VeryDarkBlue font-medium">What is Bookmark?</h3>
          <img src="./images/icon-arrow.svg" alt="icon-arrow" className="w-[25px]" />
        </div>
        <p className="text-GrayishBlue mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
        </p>
        </div>
      </div>
    </section>
  );
}

export default Questions;
