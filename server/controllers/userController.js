// create a function to register a user
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// genrate JWT token
const generateToken = (userId) => {
  const payload = userId;
  return jwt.sign(payload, process.env.JWT_SECRET);
};
// register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password || password.length < 8) {
      return res.json({ success: false, message: "fill all the fields" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(user._id.toString());
    res.json({ success: true, token });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
// login USer 

const loginUser= async()=>{

}