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
      <input
        value={toUpdate[field][id].coverImage}
        onChange={handleChange}
        name="coverImage"
        placeholder="link to cover image"
      />
      <input
        value={toUpdate[field][id].link}
        onChange={handleChange}
        name="link"
        placeholder="link to project"
      />
    </div>
  );
};
export { ProjectInputField };
