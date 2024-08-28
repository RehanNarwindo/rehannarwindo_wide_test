const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;
function generateToken(data) {
    return jwt.sign(data, key);
}

function verifyToken(data) {
    return jwt.verify(data, key);
}

module.exports = { generateToken, verifyToken };
