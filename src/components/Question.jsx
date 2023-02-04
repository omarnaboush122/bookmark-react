import { useState } from "react";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="py-8 border-b border-b-GrayishBlue">
      <div className="flex justify-between items-center">
        <h3
          className="text-VeryDarkBlue font-medium cursor-pointer hover:text-SoftRed md:text-xl transition-colors duration-300"
          onClick={toggleAnswer}
        >
          {question}
        </h3>
        <img
          src="./images/icon-arrow.svg"
          alt="icon-arrow"
          className={`cursor-pointer ${
            showAnswer ? "img-active" : ""
          } transition-all duration-300 lg:w-[25px]`}
          onClick={toggleAnswer}
        />
      </div>
      {showAnswer && <p className="text-GrayishBlue mt-5">{answer}</p>}
    </div>
  );
};

export default Question;
