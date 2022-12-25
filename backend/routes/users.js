const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
//register
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    //save user and send response
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(400).json("Wrong username or password!!!");

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !validPassword && res.status(400).json("Wrong username or password!!");

    //send response
    res.status(200).send({ _id: user._id, username: user.username });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
