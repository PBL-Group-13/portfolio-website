import asyncHandler from "express-async-handler";

const helloWorldController = asyncHandler(async (req, res) => {
  console.log(req.cookies);
  // set cookie
  res.cookie("test", "__test");

  res.status(200).json({ message: "hello from node" });
});

export { helloWorldController };
