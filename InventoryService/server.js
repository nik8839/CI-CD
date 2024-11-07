const express = require('express');
const app = express();
app.get('/inventory', (req, res) => {
  res.json({ message: 'Inventory service is running' });
});
app.listen(3003, () => {
  console.log('InventoryService running on port 3003');
});
