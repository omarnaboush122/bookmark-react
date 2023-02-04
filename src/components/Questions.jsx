import questions from "../questions-data";
import Question from "./Question";

const Questions = () => {


  const allQuestions = questions.map(question => (
    <Question key={question.id} {...question}/>
  ) )

  return (
    <section className="px-8 py-12 lg:mt-16">
      <div className="text-center max-w-sm mx-auto sm:max-w-lg lg:max-w-2xl">
        <h1 className="text-VeryDarkBlue text-3xl font-medium sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="text-GrayishBlue mt-5 mb-16 md:text-xl">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="w-full m-auto sm:max-w-[600px]">
        {allQuestions}
      </div>
    </section>
  );
};

export default Questions;
