import jwt from "jsonwebtoken";

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
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
