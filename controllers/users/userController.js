const User = require("../../models/user.js");
const bcrypt = require("bcrypt");
const BaseController = require("../base/baseController.js");
const jwt = require("jsonwebtoken");
const Logger = require("../../tools/logger.js");
class userController extends BaseController {
  constructor() {
    super(User);
  }

  async create(req, res) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const validUser = await User.find({ username: req.body.username });
    const validEmail = await User.find({ username: req.body.email });

    if (validUser > 0) {
      return res.status(409).json({
        massage: "Your username was used",
      });
    }
    if (validEmail > 0) {
      return res.status(409).json({ message: "Your email was used" });
    }
    const newUser = new User({
      username: req.body.username,
      password: hashed,
      email: req.body.email,
      avatar: 0,
    });

    return super.create(res, newUser);
  }
  async read(req, res) {
    const { id } = req.params;
    return super.read(req, res, id);
  }
}
module.exports = new userController();
