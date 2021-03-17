const SkillsInputField = (props) => {
  const { formData, index, setFormData } = props;
  const handleChange = (e) => {
    const tempFormData = formData;
    tempFormData.skills[index] = e.target.value;
    setFormData({ ...tempFormData });
  };
  return (
    <input
      type="text"
      value={formData.skills[index]}
      onChange={handleChange}
      name="skill"
      placeholder="skill"
    />
  );
};
export { SkillsInputField };
