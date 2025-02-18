const jwt = require("jsonwebtoken");

class middlewaresController {
  async verifyToken() {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(500).json("You're not authenticated");
    }
  }
}
module.exports = middlewaresController;
