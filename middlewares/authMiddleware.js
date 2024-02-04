import Jwt from "jsonwebtoken";
const userAuth = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || authHeaders.startWith("Bearer")) {
      next("Auth failed");
    }
    //convert string into array then access 1 index(token value)
    const token = authHeaders.split(" ")[1];
    try {
      const payload = Jwt.verify(token, process.env.JWT_SECRET);
      req.user = { userId: payload.userId };
      next();
    } catch (error) {
      next("Auth failed");
    }
  } catch (error) {
    next("Auth failed");
  }
};
export default userAuth;
