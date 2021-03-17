import React, { useEffect } from "react";
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
  const handleClick = (e) => {
    const name = e.target.name;
    if (counter[name] < 5) {
      setCounter({ ...counter, [name]: counter[name] + 1 });
      const tempFormData = formData;
      tempFormData[name].push(inputControl[name]);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.slug}
          onChange={handleChange}
          type="text"
          name="slug"
          placeholder="slug"
        />
        <div>
          {/* Social Links */}
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
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="about me"
        />
        <div>
          <button
            name="skills"
            onClick={handleClick}
            style={{ background: "white" }}
          >
            Add Skills
          </button>
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
            style={{ background: "white" }}
          >
            Add Education
          </button>
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
            style={{ background: "white" }}
          >
            Add Experience
          </button>
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
            style={{ background: "white" }}
          >
            Add Project
          </button>
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
        <button type="submit" style={{ background: "white" }}>
          Submit
        </button>
      </form>
    </>
  );
};

export { CreatePortfolio };
