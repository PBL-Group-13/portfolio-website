import React from "react";
const ComplexInputField = (props) => {
  const handleChange = (e, isDuration) => {
    e.preventDefault();
    const tempUpdate = toUpdate;
    const name = e.target.name;
    isDuration
      ? (tempUpdate[field][id].duration[name] = e.target.value)
      : (tempUpdate[field][id][name] = e.target.value);
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
        required
        placeholder="description"
        className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
      />
      <div>
        {/* duration */}
        <input
          className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          type="date"
          required
          value={toUpdate[field][id].duration.start}
          onChange={(e) => {
            handleChange(e, true);
          }}
          name="start"
        />
        <input
          className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          type="date"
          value={toUpdate[field][id].duration.end}
          onChange={(e) => {
            handleChange(e, true);
          }}
          name="end"
        />
      </div>
    </div>
  );
};
export { ComplexInputField };
