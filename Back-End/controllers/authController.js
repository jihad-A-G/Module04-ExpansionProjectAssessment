import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";



export const userSignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({
      where: { [Op.or]: [{ username: username }, { email: email }] },
    });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
      compId: 1,
    });
    res
      .status(200)
      .json({ user: user, message: "User created successfully" });
  } catch (err) {
    console.error(err);
  }
};
export const userLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username: username } });
  if(!user){
      return res.status(404).json({ message: "User not found", code: "404" });
  }
    const match = await bcrypt.compare(password, user.password);
    if (!match || !loggedInUser.authorized) {
      return res
        .status(403)
        .json({ message: "Invalid username or password", code: "403" });
    }

    const token = jwt.sign({ user: loggedInUser }, "cat in the box", {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ token: token, user: user, message: "logged in!" });
  } catch (err) {
    console.error(err);
  }
};



