import Reac from "react";
const SocialLinkField = (props) => {
  const { socialLink, formData, setFormData } = props;
  const handleChange = (e) => {
    e.preventDefault();
    const tempFormData = formData;
    tempFormData.socialLinks[e.target.name] = e.target.value;
    setFormData({ ...tempFormData });
  };
  return (
    <label
      htmlFor={socialLink}
      className="block uppercase text-gray-400 text-xs font-bold mb-2"
    >
      {socialLink}
      <input
        className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
        onChange={handleChange}
        value={formData.socialLinks[socialLink]}
        type="text"
        name={socialLink}
        placeholder={"https://www." + socialLink + ".com/Username"}
      />
    </label>
  );
};
export { SocialLinkField };
