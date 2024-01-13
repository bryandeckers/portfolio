"use client";
import PageHeader from "@/components/PageHeader";
import { NextPage } from "next";
import { useState } from "react";

const ContactPage: NextPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  return (
    <main className="container px-30 lg:px-60 mt-20">
      <PageHeader title="Contact" />

      <p className={`${errorMessage !== "" ? "block" : "hidden"} bg-[#b3124f] text-white p-5 rounded-lg`}>{errorMessage}</p>

      <form className="flex flex-col gap-5 mt-14 mb-20">
        <fieldset className="relative border rounded-lg bg-white">
          <legend className="ml-5 px-2 text-gray-500 font-semibold">
            Email
          </legend>
          <input
            name="email"
            type="email"
            className="w-full px-4 mb-4 mt-1 outline-none text-md italic text-gray-600"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value });
            }}
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
            onChange={(e) => {
              setFormValues({ ...formValues, message: e.target.value });
            }}
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className="bg-green-600 text-white rounded-lg px-10 w-full md:w-fit h-12 mt-3 font-semibold ml-auto"
          onClick={() => {
            if (!formValues.email || !formValues.message) {
              setErrorMessage("Gelieve alle velden in te vullen");
              return;
            }

            const formData = new FormData();
            formData.append("from", formValues.email);
            formData.append("content", formValues.message);

            fetch("/api/mail", {
              method: "POST",
              body: formData,
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });

            setErrorMessage("");
          }}
        >
          Send Your Message
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
