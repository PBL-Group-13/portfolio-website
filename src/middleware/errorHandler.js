import mongodb from "mongodb";
import mongoose from "mongoose";

/**
 * error middleware
 */
export const errorHandler = (err, req, res, _next) => {
  console.log("[Error] : ", err);
  if (err instanceof mongodb.MongoError) {
    if (err.code === 11000) {
      const errmsg = err.errmsg?.match(/[^{}]+(?=})/g)?.join("");
      const message = `Duplicate field value : ${errmsg}. Use another Value`;
      res.status(400).send({ status: "error", errors: [{ message }] });
      return;
    }
    if (err.name === "ValidationError") {
      const message = `${err.message}`;
      res.status(400).send({ status: "error", errors: [{ message }] });
      return;
    }
    res
      .status(500)
      .send({ status: "error", errors: [{ message: "something went wrong" }] });
  }

  if (err instanceof mongoose.Error.CastError) {
    const message = `Invalid ${err.path}: ${err.value}`;
    res.status(400).send({ status: "error", errors: [{ message }] });
    return;
  }
  if (
    err instanceof mongoose.Error.ValidatorError ||
    err instanceof mongoose.Error.ValidationError
  ) {
    res
      .status(400)
      .send({ status: "error", errors: [{ message: err.message }] });
    return;
  }

  res.status(500).send({
    status: "error",
    errors: [
      {
        message:
          process.env.NODE_ENV === "production"
            ? "Something Went Wrong"
            : err.message,
      },
    ],
  });
};
