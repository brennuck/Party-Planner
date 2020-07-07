const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

const secrets = require("../config/secrets.js");
const Auth = require("./auth-model.js");
const { authenticate } = require("./authenticate.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 9;
  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Auth.add(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Problem registering" });
    });
});



module.exports = router;