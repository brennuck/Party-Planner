const jwt = require("jsonwebtoken");

const secret = require("../config/secrets.js");

module.exports = {
  authenticate,
};

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "can't touch this!" });
      } else {
        req.decodedJwt = decodedToken;
        console.log("decoded token", req.decodedJwt);
        next();
      }
    });
  } else {
    res.status(401).json({ error: "You do not have access to these parties" });
  }
}
