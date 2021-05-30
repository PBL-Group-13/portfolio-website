//import mongoose and validator modules
import mongoose from "mongoose";
import { User } from "./User.js";

const experienceSchema = new mongoose.Schema(
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
        type: Date,
        required: true,
      },
      end: {
        type: Date,
        required: false,
      },
    },
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
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
    },
    link: {
      type: String,
      required: false,
    },
  },
  {
    _id: false,
  }
);

const portfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    socialLinks: {
      github: String,
      facebook: String,
      linkedIn: String,
      twitter: String,
    },
    about: {
      type: String,
      required: false,
    },
    skills: {
      type: [String],
      required: false,
      default: [],
    },
    education: {
      type: [experienceSchema],
      default: [],
    },
    experience: {
      type: [experienceSchema],
      default: [],
    },

    projects: {
      type: [projectSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

portfolioSchema.pre("save", async function (next) {
  if (this.isNew) {
    const user = await User.findByIdAndUpdate(this.user, {
      portfolio: this._id,
      skills: this.skills,
    });
    if (!user) {
      throw new Error("Something went wrong!");
    }
  }

  if (this.isModified("skills")) {
    const user = await User.findByIdAndUpdate(this.user, {
      skills: this.skills,
    });
    if (!user) {
      throw new Error("Something went wrong!");
    }
  }
  next();
});
portfolioSchema.pre("remove", async function (next) {
  const user = await User.findById(this.user);
  user.portfolio = undefined;
  await user.save();
  next();
});
const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export { Portfolio };
