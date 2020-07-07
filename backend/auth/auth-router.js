const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

const secret = require("../config/secrets.js");
const Auth = require("./auth-model.js");

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

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  Auth.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "couldn't login" });
    });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secret.jwtSecret, options)
}

module.exports = router;
