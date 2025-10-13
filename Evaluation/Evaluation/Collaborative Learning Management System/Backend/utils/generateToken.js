const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  try {
    const secret = process.env.JWT_SECRET || 'fallback-secret-key-for-development';
    return jwt.sign({ id }, secret, {
      expiresIn: '30d',
    });
  } catch (error) {
    console.error('Token generation error:', error);
    throw new Error('Failed to generate token');
  }
};

module.exports = generateToken;