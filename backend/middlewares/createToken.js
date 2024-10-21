const jwt = require('jsonwebtoken');

// Secret key for signing the token (you should store it in an environment variable for security)
const SECRET_KEY = 'this-is-a-secret';

// Middleware to create a JWT token
const createToken = (payload) => {
  
  if (!payload) {
    return res.status(400).json({ message: 'User data is required' });
  }

  // Define the payload for the token
  // const payload = {
  //   id: user._id,     // User ID
  //   name: user.name,  // User name
  //   email: user.email // User email
  // };

  // Generate the token (token valid for 1 hour)
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  // return the token 
  return token;

};

module.exports = createToken;
