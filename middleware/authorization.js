const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const headerValue = req.headers["authorization"];
  const accessToken = headerValue && headerValue.split(" ")[1];
  console.log(accessToken)

  if (accessToken == undefined) return res.sendStatus(401);

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);

    res.user = user;
    next();
  });
};

module.exports = authorize
