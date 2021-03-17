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
    <div>
      <input
        onChange={handleChange}
        value={formData.socialLinks[socialLink]}
        type="text"
        name={socialLink}
        placeholder={"https://www." + socialLink + ".com/Username"}
      />
    </div>
  );
};
export { SocialLinkField };
