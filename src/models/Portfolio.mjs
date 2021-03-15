//import mongoose and validator modules
import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  socialLinks: {
    github: {
      type: String,
      required: false,
      default: "N/A",
    },
    facebook: {
      type: String,
      required: false,
      default: "N/A",
    },
    linkedIn: {
      type: String,
      required: false,
      default: "N/A",
    },
    twitter: {
      type: String,
      required: false,
      default: "N/A",
    },
  },
  about: {
    type: String,
    required: false,
    default: "N/A",
  },
  skills: {
    skill1: { type: String, required: false, default: "" },
    skill2: { type: String, required: false, default: "" },
    skill3: { type: String, required: false, default: "" },
    skill4: { type: String, required: false, default: "" },
  },
  education: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      duration: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: false,
          default: "Present",
        },
      },
    },
  ],
  experience: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      duration: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: false,
          default: "Present",
        },
      },
    },
  ],
  projects: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      coverImage: {
        type: String,
        required: false,
        default: "defaultImageUrl",
      },
      link: {
        type: String,
        required: false,
        default: "N/A",
      },
    },
  ],
});
const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export { Portfolio };
