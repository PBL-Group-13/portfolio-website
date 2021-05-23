//import mongoose and validator modules
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
//import bcryptjs for hashing the password
import bcrypt from "bcrypt";
import { Portfolio } from "./Portfolio.js";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
      default: "anonymous",
      trim: true,
    },
    lastName: {
      type: String,
      required: false,
      default: "anonymous",
      trim: true,
    },
    avatar: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    birthDate: {
      type: Date,
    },
    location: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    portfolio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  }
);

//(instance) method accessable by our individual object(user) of Model(User)
userSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, process.env.JWT_SECRET);
  return token;
};

//static method accessible by our Model(User)
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }
  return user;
};

//hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  //if user has modified the password
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  if (user.isModified("slug")) {
    if (user.portfolio) {
      const portfolio = await Portfolio.findById(user.portfolio);
      if (portfolio) {
        portfolio.slug = user.slug;
        try {
          await portfolio.save();
        } catch (e) {
          throw new Error("Something went wrong while saving portfolio!");
        }
      }
    }
  }
  //signifies end ofthe middle process just before save is executed
  next();
});

userSchema.pre("validate", function (next) {
  if (!this.slug) {
    this.slug = `${this.firstName}-${this.lastName}-${crypto
      .randomBytes(8)
      .toString("hex")
      .toLowerCase()}`;
  }
  next();
});

const User = mongoose.model("User", userSchema);

export { User };
