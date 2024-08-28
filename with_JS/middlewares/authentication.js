const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models/index");

module.exports = async function authentication(req, res, next) {
  let access_token = req.headers.authorization;
  try {
    if (!access_token) {
      throw { name: "InvalidToken" };
    }
    let [bearer, token] = access_token.split(" ");
    if (bearer !== "Bearer") {
      throw { name: "InvalidToken" };
    }
    let verifed = verifyToken(token);
    if (!verifed) {
      throw { name: "InvalidToken" };
    }
    let user = await User.findByPk(verifed.id);
    if (!user) {
      throw { name: "InvalidToken" };
    }
    req.user = {
      id: user.id,
      name: user.name,
    };
    next();
  } catch (err) {
    next(err);
  }
};
