const User = require("../models/User");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const auth = require('../middlewares/auth')

// @route   POST /api/users
// @desc    Register user & return token
// @access  Public
router.post(
  "/register",
  [
    body("password", "Password is required").isLength({ min: 6 }),
    body("company", "Company is required").not().isEmpty(),
    body("email", "E-Mail is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // See if user exists
    // Encrypt password
    // Return jwt

    const { password, email , company} = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        email,
        password,
        company
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error...");
    }
  }
);
// @route   GET /api/auth
// @desc    verify token and return user (LOAD USER)
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// @route   POST /api/auth
// @desc    Authenticate user and get token (LOGIN)
// @access  Public
router.post(
  "/",
  [
    body("password", "Please do not leave it blank").exists(),
    body("email", "Please do not leave it blank").not().isEmpty(), 
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // See if user exists
    // Encrypt password
    // Return jwt

    const { password, email } = req.body;

    if (!email && !password) {
      res.status(400).json({ msg: "Please enter both fields" });
    }

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error...");
    }
  }
);

 

module.exports = router;