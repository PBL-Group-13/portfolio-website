import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFetch } from "../../../../lib/hooks";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [contactRequest, { data, loading, error }] = useFetch({
    onError: (e) => {
      if (e instanceof Array) {
        e.forEach((e) => {
          toast.error(e.message || "Something Went Wrong", {});
        });
      }
    },
    onSuccess: (data) => {
      setFormData({
        email: "",
        name: "",
        message: "",
      });
      console.log(data);
      toast.success("Request Sent");
    },
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    contactRequest({
      url: "/api/portfolios/contact",
      method: "post",
      data: { ...formData, portfolioEmail: props.email },
    });
  };
  return (
    <div className="p-6 sm:p-8 md:p-10 text-justify">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6">
        Contact
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="block sm:flex justify-between">
          <label
            htmlFor="email"
            className="block uppercase text-gray-400 text-xs font-bold sm:mr-2 w-full"
          >
            Email
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
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
              value={formData.name}
              onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            minLength={3}
            maxLength={1000}
            className="px-3 py-3 placeholder-gray-500 text-gray-400 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2 h-40"
          />
        </label>
        <button type="submit" className="px-6 py-2 bg-gray-200 mt-4">
          Send
        </button>
      </form>
    </div>
  );
};

export { Contact };
