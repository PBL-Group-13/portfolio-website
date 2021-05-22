import React from "react";
const ProjectInputField = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    const tempUpdate = toUpdate;
    const name = e.target.name;
    tempUpdate[field][id][name] = e.target.value;
    setFormData({ ...tempUpdate });
  };
  const { toUpdate, id, setFormData, field } = props;
  return (
    <div className="py-6">
      <input
        type="text"
        value={toUpdate[field][id].name}
        onChange={handleChange}
        name="name"
        required
        minLength={3}
        maxLength={100}
        placeholder="name"
        className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
      />
      <textarea
        value={toUpdate[field][id].description}
        onChange={handleChange}
        name="description"
        placeholder="description"
        required
        minLength={3}
        className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
      />
      <input
        value={toUpdate[field][id].coverImage}
        onChange={handleChange}
        name="coverImage"
        placeholder="link to cover image"
        className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
      />
      <input
        value={toUpdate[field][id].link}
        onChange={handleChange}
        name="link"
        required
        minLength={3}
        maxLength={100}
        placeholder="link to project"
        className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
      />
    </div>
  );
};
export { ProjectInputField };
