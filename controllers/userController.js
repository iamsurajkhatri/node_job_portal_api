import userModel from "../models/userModel.js";
const updateUser = async (req, res, next) => {
  const { name, email, lastName, location } = req.body;
  if (!name || !email || !lastName || !password) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ _id: req.user?._id });
  user.name = name;
  user.email = email;
  user.lastName = lastName;
  user.location = location;
  await user.save();
  const token = user.createJWT();
  res.status(200).json({ user, token, message: "User updated successfull" });
};

export { updateUser };
