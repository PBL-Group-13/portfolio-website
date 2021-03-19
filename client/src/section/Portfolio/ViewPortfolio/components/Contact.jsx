import React from "react";

const Contact = () => {
  return (
    <div className="p-6 sm:p-8 md:p-10 text-justify">
      <h1 class="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6">
        Contact
      </h1>
      <form>
        <div className="block sm:flex justify-between">
          <label
            htmlFor="email"
            className="block uppercase text-gray-400 text-xs font-bold sm:mr-2 w-full"
          >
            Email
            <input
              type="email"
              name="email"
              minLength={6}
              maxLength={100}
              required
              className="px-3 py-3 placeholder-gray-500 text-gray-400 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
              placeholder="Email"
            />
          </label>
          <label
            htmlFor="name"
            className="block uppercase text-gray-400 text-xs font-bold sm:ml-2 w-full"
          >
            Name
            <input
              type="text"
              name="name"
              minLength={6}
              maxLength={100}
              required
              className="px-3 py-3 placeholder-gray-500 text-gray-400 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
              placeholder="Name"
            />
          </label>
        </div>
        <label
          htmlFor="message"
          className="block uppercase text-gray-400 text-xs font-bold w-full mt-4"
        >
          Message
          <textarea
            name="message"
            placeholder="Message"
            required
            minLength={3}
            maxLength={1000}
            className="px-3 py-3 placeholder-gray-500 text-gray-400 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2 h-40"
          />
        </label>
        <button className="px-6 py-2 bg-gray-200 mt-4">Send</button>
      </form>
    </div>
  );
};

export { Contact };
