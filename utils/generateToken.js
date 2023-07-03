const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      eid: user.eid,
      name: user.name,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '30m'
    }
  );

  return token.toString();
};

module.exports = generateToken