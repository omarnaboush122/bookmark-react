import { useEffect, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsCorrect(true);
      setIsError(false);
    } else {
      setIsError(true);
      setIsCorrect(false);
    }

    setEmail("");
  };

  useEffect(() => {
    let timeOut = setTimeout(()=> {
      setIsCorrect(false);
      setIsError(false)
    },3000)

    return () => {
      clearTimeout(timeOut)
    }
  },[isCorrect,isError])

  return (
    <section name="contact" className="bg-SoftBlue px-8 py-12 text-white text-center">
      <p className="text-sm tracking-[0.3rem] uppercase lg:text-base">
        35,000+ already joined
      </p>
      <h3 className="max-w-[500px] mx-auto mt-4 mb-6 text-2xl sm:text-3xl md:text-4xl lg:max-w-[600px] lg:text-5xl lg:mb-12">
        Stay up-to-date with what we’re doing
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center md:flex-row md:items-start md:justify-center"
      >
        <div
          className={`relative p-1 pb-8 mb-3 rounded-md ${
            isError && "bg-SoftRed"
          } ${isCorrect && "bg-[#57faa9]"}`}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-[300px] sm:w-[400px] mx-auto py-3 px-6 text-VeryDarkBlue rounded-md border outline-none md:mx-0"
            onChange={handleChange}
            value={email}
            required
          />
          {isError && (
            <>
              <img
                src="./images/icon-error.svg"
                alt="error-icon"
                className="absolute right-5 top-5"
              />
              <p className="absolute left-[15px] bottom-[10px] text-xs italic">
                Whoops, make sure it's an email
              </p>
            </>
          )}
          {isCorrect && (
            <p className="absolute left-[15px] bottom-[10px] text-xs italic">
              Your email has been sent, thank you !
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-[300px] bg-SoftRed sm:w-[400px] mx-auto px-6 py-3 rounded-md border border-SoftRed shadow-md hover:bg-white hover:border-SoftRed hover:text-SoftRed transition-all duration-300 md:m-1 md:ml-6 md:w-[150px]"
        >
          Contact Us
        </button>
      </form>
    </section>
  );
};

export default Contact;
