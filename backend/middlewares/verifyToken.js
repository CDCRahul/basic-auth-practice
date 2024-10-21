const jwt = require('jsonwebtoken');

// Secret key for verifying the token (must be the same as the one used for signing)
const SECRET_KEY = 'this-is-a-secret';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    // Token is valid, proceed with the request
    req.user = decoded; // Attach user info from token to the request
    next();
  });
};

module.exports = verifyToken;
