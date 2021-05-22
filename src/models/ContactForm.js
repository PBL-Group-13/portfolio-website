//import mongoose and validator modules
import mongoose from "mongoose";
const contactFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "anonymous",
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    message: {
      type: String,
      required: false,
      maxlength: 150,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const ContactForm = mongoose.model("ContactForm", contactFormSchema);

export { ContactForm };
