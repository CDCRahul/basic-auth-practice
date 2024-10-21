const validateRequestHeaders = (requiredHeaders) => (req, res, next) => {
    const missingHeaders = requiredHeaders.filter(header => !req.headers[header.toLowerCase()]);
  
    if (missingHeaders.length > 0) {
      return res.status(400).json({ 
        message: `Missing required headers: ${missingHeaders.join(', ')}` 
      });
    }
  
    next(); // Pass the request to the next middleware/route handler
  };
  
  module.exports = validateRequestHeaders;
  