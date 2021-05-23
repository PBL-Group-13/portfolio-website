import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetch } from "../../../lib/hooks";
import {
  ComplexInputField,
  ProjectInputField,
  SocialLinkField,
  SkillsInputField,
  inputControl,
  initPortfolioSchema,
  initCounters,
} from "./utils";
const CreatePortfolio = (props) => {
  const [counter, setCounter] = React.useState(initCounters);
  const history = useHistory();
  const [formData, setFormData] = React.useState(initPortfolioSchema);
  // const [formError, setFormError] = useState({
  //   about: false,
  //   education: [],
  //   experience: [],
  //   projects: [],
  //   skills: [],
  //   slug: false,
  // });
  const [createPortfolio, { data, loading, errors }] = useFetch({
    onError: (e) => {
      if (e instanceof Array) {
        e.forEach((e) => {
          toast.error(e.message || "Something Went Wrong", {});
        });
      }
    },
    onSuccess: (data) => {
      toast.success("Portfolio Creation Successful");
      history.push("/");
      console.log(data);
    },
  });
  const handleRemove = (e) => {
    e.preventDefault();
    const name = e.target.name;
    if (counter[name] > 0) {
      setCounter({ ...counter, [name]: counter[name] - 1 });
      const tempFormData = formData;
      tempFormData[name].pop();
      setFormData({ ...tempFormData });
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    if (counter[name] < 5) {
      setCounter({ ...counter, [name]: counter[name] + 1 });
      const tempFormData = formData;

      tempFormData[name].push(inputControl[name]());
      setFormData({ ...tempFormData });
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createPortfolio({
      url: "/portfolios",
      data: formData,
      method: "post",
    });
  };
  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-gray-300 my-8">Portfolio</h1>
        <label
          htmlFor="slug"
          className="block uppercase text-gray-300 text-xs font-bold mb-2"
        >
          Slug
          <input
            value={formData.slug}
            onChange={handleChange}
            type="text"
            name="slug"
            minLength={6}
            maxLength={100}
            required
            className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
            placeholder="slug"
          />
        </label>
        <div>
          <h1 className="text-2xl font-bold text-gray-300 my-8">Social Link</h1>
          {Object.keys(initPortfolioSchema.socialLinks).map(
            (socialLink, index) => {
              return (
                <SocialLinkField
                  formData={formData}
                  setFormData={setFormData}
                  socialLink={socialLink}
                  key={index}
                />
              );
            }
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-300 my-8">About You</h1>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="about me"
            required
            minLength={3}
            maxLength={1000}
            className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-700 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2 h-40"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-300 my-8">Resume</h1>
          <button
            name="skills"
            onClick={handleClick}
            className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          >
            Add Skills
          </button>
          {counter.skills !== 0 && (
            <button
              name="skills"
              onClick={handleRemove}
              className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-red-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
            >
              Remove Skill
            </button>
          )}
          {/* top 5 skills */}
          {formData.skills.map((skill, index) => {
            return (
              <SkillsInputField
                formData={formData}
                setFormData={setFormData}
                key={index}
                index={index}
              />
            );
          })}
        </div>
        <div>
          <button
            name="education"
            onClick={handleClick}
            className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          >
            Add Education
          </button>
          {counter.education !== 0 && (
            <button
              name="education"
              onClick={handleRemove}
              className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-red-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
            >
              Remove Education
            </button>
          )}
          {/* education */}
          {formData.education.map((edu, index) => {
            return (
              <ComplexInputField
                toUpdate={formData}
                id={index}
                setFormData={setFormData}
                field="education"
                key={index}
              />
            );
          })}
        </div>

        <div>
          {/* experience */}
          <button
            name="experience"
            onClick={handleClick}
            className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          >
            Add Experience
          </button>
          {counter.experience !== 0 && (
            <button
              name="experience"
              onClick={handleRemove}
              className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-red-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
            >
              Remove Experience
            </button>
          )}
          {formData.experience.map((exp, index) => {
            return (
              <ComplexInputField
                toUpdate={formData}
                id={index}
                setFormData={setFormData}
                field="experience"
                key={index}
              />
            );
          })}
        </div>
        <div>
          <button
            name="projects"
            onClick={handleClick}
            className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-gray-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          >
            Add Project
          </button>
          {counter.projects !== 0 && (
            <button
              name="projects"
              onClick={handleRemove}
              className="px-3 py-3 placeholder-gray-500 text-gray-300 bg-red-800 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
            >
              Remove Project
            </button>
          )}
          {formData.projects.map((proj, index) => {
            return (
              <ProjectInputField
                toUpdate={formData}
                id={index}
                setFormData={setFormData}
                field="projects"
                key={index}
              />
            );
          })}
        </div>
        <button
          type="submit"
          className="px-3 py-3 my-8 placeholder-gray-500 text-gray-900 bg-gray-300 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export { CreatePortfolio };
