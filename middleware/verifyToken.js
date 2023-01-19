const jwt = require("jsonwebtoken");

// verify the authorization token

function verifyToken(req, res, next) {
  // FORMAT OF TOKEN
  // Authorization: "Bearer token"
  // Get auth header value
  const bearerHeader = req.headers["authorization"];

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;

    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    // decode
    jwt.verify(req.token, jwtSecretKey, function (error) {
      if (error) {
        res.json({ message: "ERROR" });
      } else {
        next();
      }
    });
  } else {
    // unauthorized
    res.json({ message: "ERROR" });
  }
}

// export
module.exports = verifyToken;
