const userController = require("../controllers/users/userController.js");
const middlewareController = require("../controllers/middleware/middlewareControllers.js");

const router = require("express").Router();
router.post("/signup", userController.create);

module.exports = router;
