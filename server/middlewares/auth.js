import jwt from "jsonwebtoken";
import '../utils/error.js';

/**
 * Middleware function to verify the JWT token in the request header.
 * It takes the 'Authorization' token from the header, verifies it, and if valid, attaches
 * the decoded user to the request object.
 * If the token is not provided or is not valid, it responds with an error message.
 */
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      throw createError(403, "Access Denied. No token provided.");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      throw createError(401, "Failed to authenticate token.");
    }
    req.user = verified;
    next();
  } catch (error) {
    let status = error.status || 500;
    let message = error.message || 'Something went wrong';
    res.status(status).json({ 
      message: message,
      status: status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl
      }
    });
  }
};
