

const Contact = () => {
  return (
    <section className="bg-SoftBlue px-8 py-12 text-white text-center">
    <p className="text-sm tracking-[0.3rem] uppercase">35,000+ already joined</p>
        <h3 className="max-w-[500px] mx-auto mt-4 mb-6 text-2xl font-medium">Stay up-to-date with what we’re doing</h3>
        <form className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <input type="email" placeholder="Enter your email address" className="sm:w-[400px] mx-auto py-3 px-6 text-VeryDarkBlue rounded-md border outline-none lg:ml-0 lg:mr-0" />
          <button type="submit" className="mt-4 bg-SoftRed sm:w-[400px] mx-auto px-6 py-3 rounded-md border border-SoftRed shadow-md hover:bg-white hover:border-SoftRed hover:text-SoftRed transition-all duration-300 lg:mt-0 lg:ml-6 lg:mr-0 lg:w-[150px]">Contact Us</button>
        </form>
    </section>
  );
}

export default Contact;
