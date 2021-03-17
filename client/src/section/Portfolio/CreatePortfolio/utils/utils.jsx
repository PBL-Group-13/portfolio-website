const complexUnit = () => {
  return {
    name: "",
    description: "",
    duration: {
      start: "",
      end: "",
    },
  };
};
const projectUnit = () => ({
  name: "",
  description: "",
  coverImage: "",
  link: "",
});
const inputControl = {
  experience: complexUnit(),
  projects: projectUnit(),
  education: complexUnit(),
  skills: "",
};
const initPortfolioSchema = {
  socialLinks: {
    github: "",
    facebook: "",
    linkedIn: "",
    twitter: "",
  },
  about: "",
  slug: "",
  skills: [],
  education: [],
  experience: [],
  projects: [],
};
const initCounters = {
  education: 0,
  skills: 0,
  experience: 0,
  projects: 0,
};
export { inputControl, initPortfolioSchema, initCounters };
