import React, { useRef, useState } from "react";
import { IoIosContact } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const scref = useRef(null);
  const [formData, setFormData] = useState({
    from_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = async (e) => {
    await setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_na7jol1",
        "template_i1jlgmu",
        scref.current,
        "5v90ykZ02ZoMgzeN5"
      )
      .then(
        (result) => {
          alert("your response has been submitted successfuly ");
        },
        (error) => {
          console.error("Email could not be sent:", error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className=" overflow-y-auto scroll-smooth p-4 bg-slate-50"
    >
      <h1 className="font-bold text-5xl scroll-smooth justify-center  flex items-center">
        <IoIosContact className="mx-2 justify-center" /> CONTACT{" "}
        <span className="text-blue-500 ml-3"> ME</span>
      </h1>
      <form
        ref={scref}
        class="w-full  mt-10 px-8 mx-auto max-w-lg"
        onSubmit={handleSubmit}
      >
        <div class="flex flex-wrap  -mx-3 mb-6">
          <div class="w-full md:w-1/2  px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="last_name"
              onChange={handleChange}
              value={formData.last_name}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:w-1/3 md:items-center">
          <div class="md:w-1/3 flex p-4 ">
            <button
              class="shadow bg-blue-500  hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-blue-400 "
              type="button"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
