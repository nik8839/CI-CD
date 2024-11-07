const express = require('express');
const app = express();
app.get('/order', (req, res) => {
  res.json({ message: 'Order service is running' });
});
app.listen(3001, () => {
  console.log('OrderService running on port 3001');
});
