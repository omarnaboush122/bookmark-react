

const Contact = () => {
  return (
    <section className="bg-SoftBlue px-8 py-12 text-white text-center">
    <p className="text-sm tracking-[0.3rem] uppercase">35,000+ already joined</p>
        <h3 className="max-w-[500px] mx-auto mt-4 mb-6 text-2xl font-medium md:text-3xl lg:text-4xl lg:mb-12">Stay up-to-date with what we’re doing</h3>
        <form className="flex flex-col items-center md:flex-row md:items-start md:justify-center">
          <div className="relative p-1 pb-8 mb-5 bg-SoftRed rounded-md">
          <input type="email" placeholder="Enter your email address" className="w-[300px] sm:w-[400px] mx-auto py-3 px-6 text-VeryDarkBlue rounded-md border outline-none md:mx-0" />
          <img src="./images/icon-error.svg" alt="error-icon" className="absolute right-5 top-5" />
          <p className="absolute left-[15px] bottom-[10px] text-xs italic">Whoops, make sure it's an email</p>
          </div>
          <button type="submit" className="w-[300px] bg-SoftRed sm:w-[400px] mx-auto px-6 py-3 rounded-md border border-SoftRed shadow-md hover:bg-white hover:border-SoftRed hover:text-SoftRed transition-all duration-300 md:m-0 md:ml-6 md:w-[150px]">Contact Us</button>
        </form>
    </section>
  );
}

export default Contact;
