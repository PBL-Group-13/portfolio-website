//import mongoose and validator modules
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

//import bcryptjs for hashing the password
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      default: "anonymous",
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      minlength: 7,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      //minlength:6 //This can also be used as opposed to validate
      validate(value) {
        if (value.length <= 5) {
          throw new Error("Password should be atleast 6 characters long");
        }
      },
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
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "LolThisIsNoSecret");
  await user.save();
  return token;
};

//static method accessible by our Model(User)
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
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
  //signifies end ofthe middle process just before save is executed
  next();
});

const User = mongoose.model("User", userSchema);

export { User };
