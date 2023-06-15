import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * User registration endpoint.
 * It takes the user's username, email, and password as input,
 * hashes the password and stores the user information in the database.
 */
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    delete savedUser._doc.password;
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/**
 * User login endpoint.
 * It takes the user's email and password as input, validates them,
 * and if successful, generates a JWT token.
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user === null) {
      return res.status(404).json({ error: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword == false) {
      return res.status(400).json({ error: "Wrong password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    delete user._doc.password;
    res.status(200).json({ user: user, token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
