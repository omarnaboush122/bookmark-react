

const Question = () => {
  return (
    <div className="py-8 border-b border-b-GrayishBlue">
    <div className="flex justify-between items-center">
      <h3 className="text-VeryDarkBlue font-medium md:text-xl">
        What is Bookmark?
      </h3>
      <img
        src="./images/icon-arrow.svg"
        alt="icon-arrow"
        className={`w-[25px] cursor-pointer ${
          question === "q1" ? "img-active" : ""
        }`}
        onClick={handleClickFirst}
      />
    </div>
    {question === "q1" && (
      <p className="text-GrayishBlue mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
        quis quam ornare mattis.
      </p>
    )}
  </div>
  );
}

export default Question;
