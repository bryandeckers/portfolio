import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <div
      id="contact"
      className="h-full min-h-[calc(100vh-68px)] flex flex-col container w-[calc(100%-100px)] mx-auto snap-start scroll-smooth"
    >
      <div className="my-auto dark:text-gray-300">
        <h2 className="text-3xl font-semibold mb-5 overflow-hidden">Contact</h2>
        <form
          className="flex flex-col gap-5 mt-14"
          action="mailto:bryan.deckers1@gmail.com"
          method="post"
        >
          <fieldset className="relative border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600">
            <legend className="ml-5 px-2 text-gray-500 dark:text-gray-400 font-semibold">
              Name
            </legend>
            <input
              name="name"
              type="text"
              className="w-full px-4 mb-4 mt-1 outline-none text-md italic text-gray-600 dark:text-gray-400 dark:bg-gray-700"
              required
            />
          </fieldset>
          <fieldset className="relative border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600">
            <legend className="ml-5 px-2 text-gray-500 dark:text-gray-400 font-semibold">
              Email
            </legend>
            <input
              name="email"
              type="email"
              className="w-full px-4 mb-4 mt-1 outline-none text-md italic text-gray-600 dark:text-gray-400 dark:bg-gray-700"
              required
            />
          </fieldset>
          <fieldset className="relative border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600">
            <legend className="ml-5 px-2 text-gray-500 dark:text-gray-400 font-semibold">
              Message
            </legend>
            <textarea
              name="message"
              className="w-full px-3 min-h-12 outline-none text-md italic text-gray-600 dark:text-gray-400 resize-none dark:bg-gray-700"
              required
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="bg-green-600 dark:bg-opacity-50 bg-opacity-70 text-white dark:text-gray-200 rounded-lg px-10 w-fit h-12 mt-3 font-semibold ml-auto"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
