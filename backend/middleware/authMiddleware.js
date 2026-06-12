const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({
      message: "Access Denied"
    });
  }

  const token = authHeader.split(" ")[1];

  try {

    const verified = jwt.verify(
  token,
  process.env.JWT_SECRET
);

console.log("USER:", verified);

req.user = verified;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid Token"
    });

  }
};

module.exports = authMiddleware;