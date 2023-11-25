const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token || token===undefined) {
    return res.redirect("/login"); // Use return here to exit the middleware
  }

  try {
    const decode = jwt.verify(token, "MYNAMEISSURYANARAYANAMALLIKWEBDEVLOPER", {
      expiresIn: "30d"
    });
    req.user = decode;
    console.log("User ID:", req.user.id); 
  } catch (error) {
    console.log(error);
    return res.status(401).send('invalid token'); // Use return here to exit the middleware
  }

  next();
};

module.exports = authenticate;
