import userModel from "../models/userModel";
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    //validate
    if (!name) {
      next("Please provide name");
    }
    if (!email) {
      next("Please provide email");
    }
    if (!password) {
      next("Please provide Password and Password should be atlest 6 character");
    }
    //check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      next("Email is Already existed");
    }
    //create User
    const user = await userModel.create({ name, email, password });
    //token from middlware
    const token = user.createJWT();

    res.status(201).send({
      message: "User Account has been created successfully",
      success: true,
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next("Please provide All Fields");
  }

  //check existing user
  const user = await userModel.findOne({ email });
  if (!user) {
    next("invalid username and password");
  }
  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("invalid username and password");
  }
  const token = user.creteJWT();
  res.status(200).json({
    success: true,
    message: "Login successfully",
    user,
    token,
  });
};
export { registerUser };
