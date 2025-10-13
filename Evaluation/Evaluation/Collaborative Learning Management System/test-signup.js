const axios = require('axios');

const testSignup = async () => {
  try {
    console.log('Testing backend connection...');
    
    // Test backend connection
    const testRes = await axios.get('http://localhost:5000/api/test');
    console.log('Backend test:', testRes.data);
    
    // Test signup
    console.log('Testing signup...');
    const signupData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'student'
    };
    
    const signupRes = await axios.post('http://localhost:5000/api/auth/register', signupData);
    console.log('Signup successful:', signupRes.data);
    
  } catch (error) {
    console.error('Test failed:');
    console.error('Status:', error.response?.status);
    console.error('Message:', error.response?.data?.message || error.message);
    console.error('Full error:', error.response?.data);
  }
};

testSignup();