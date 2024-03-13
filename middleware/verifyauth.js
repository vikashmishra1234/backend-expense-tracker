const Jwt = require("jsonwebtoken");
let secretKey = 'vikashmishra123';
const verifyToken = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];

  try {
    if (typeof bearerHeader !== "undefined") {
      let bearer = bearerHeader.split(" ");
      const token = bearer[1];
      Jwt.verify(token, secretKey, (err, success) => {
        if (err) {
          return res.status(401).json({success:false, error: "invalid token" });
        } else {
          next();
        }
      });
    } else {
      return res.json({success:false, error: "no token found" });
    }
  } catch (error) {
    console.log(error.message);
    return res.json({ success:false, error: "no token found" });
  }
};

module.exports= verifyToken;
