const roleMiddleware = (role) => {
  return (req, res, next) => {

    console.log("Required Role:", role);
    console.log("User Role:", req.user.role);

    if (req.user.role !== role) {
      return res.status(403).json({
        message: "Access Forbidden"
      });
    }

    next();
  };
};

module.exports = roleMiddleware;