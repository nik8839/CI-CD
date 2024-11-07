const express = require('express');
const app = express();
app.get('/product', (req, res) => {
  res.json({ message: 'Product service is running' });
});
app.listen(3002, () => {
  console.log('ProductService running on port 3002');
});
