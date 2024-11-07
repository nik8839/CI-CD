const express = require('express');
const app = express();
app.get('/user', (req, res) => {
  res.json({ message: 'User service is running' });
});
app.listen(3000, () => {
  console.log('UserService running on port 3000');
});
