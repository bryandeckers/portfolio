import PageHeader from "@/components/PageHeader";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <main className="container px-30 lg:px-60 mt-20">
      <PageHeader title="Contact" />

      <form
        className="flex flex-col gap-5 mt-14 mb-20"
        action="mailto:bryan.deckers1@gmail.com"
        method="post"
      >
        <fieldset className="relative border rounded-lg bg-white">
          <legend className="ml-5 px-2 text-gray-500 font-semibold">
            Name
          </legend>
          <input
            name="name"
            type="text"
            className="w-full px-4 mb-4 mt-1 outline-none text-md italic text-gray-600"
            required
          />
        </fieldset>
        <fieldset className="relative border rounded-lg bg-white">
          <legend className="ml-5 px-2 text-gray-500 font-semibold">
            Email
          </legend>
          <input
            name="email"
            type="email"
            className="w-full px-4 mb-4 mt-1 outline-none text-md italic text-gray-600"
            required
          />
        </fieldset>
        <fieldset className="relative border rounded-lg bg-white">
          <legend className="ml-5 px-2 text-gray-500 font-semibold">
            Message
          </legend>
          <textarea
            name="message"
            className="w-full px-3 h-32 outline-none text-md italic text-gray-600 resize-none"
            required
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className="bg-green-600 text-white rounded-lg px-10 w-full md:w-fit h-12 mt-3 font-semibold ml-auto"
        >
          Send Your Message
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
