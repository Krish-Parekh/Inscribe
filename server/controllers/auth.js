import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../utils/error.js";
import createError from "../utils/error.js";

/**
 * User registration endpoint.
 * It takes the user's username, email, and password as input,
 * hashes the password and stores the user information in the database.
 */
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw createError(400, "User already exists.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    delete savedUser._doc.password;
    res
      .status(200)
      .json({
        message: "User registered successfully.",
        status: 200,
        user: savedUser,
      });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
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
    if (!user) {
      throw createError(404, "User not found.");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw createError(400, "Wrong password.");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    delete user._doc.password;
    res
      .status(200)
      .json({
        message: "Logged in successfully.",
        status: 200,
        user: user,
        token: token,
      });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Server error";
    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
  }
};
