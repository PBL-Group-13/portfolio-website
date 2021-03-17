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
    <div>
      <input
        type="text"
        value={toUpdate[field][id].name}
        onChange={handleChange}
        name="name"
        placeholder="name"
      />
      <textarea
        value={toUpdate[field][id].description}
        onChange={handleChange}
        name="description"
        placeholder="description"
      />
      <div>
        {/* duration */}
        <input
          type="date"
          value={toUpdate[field][id].duration.start}
          onChange={(e) => {
            handleChange(e, true);
          }}
          name="start"
        />
        <input
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
