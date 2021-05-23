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
      className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
      name="skill"
      required
      maxLength={50}
      minLength={2}
      placeholder="skill"
    />
  );
};
export { SkillsInputField };
