const express = require('express');
const app = express();
const port = 3000;

let tireInventory = [];
let tiresSold = [];

app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Route to get current inventory
app.get('/api/inventory', (req, res) => {
  res.json(tireInventory);
});

// Route to get sold tires
app.get('/api/sold-tires', (req, res) => {
  res.json(tiresSold);
});

// Route to add tires to inventory
app.post('/api/add-tires', (req, res) => {
  const newTires = req.body;
  tireInventory.push(newTires);
  res.json(tireInventory);
});

// Route to sell tires from inventory
app.post('/api/sell-tires', (req, res) => {
  const soldTires = req.body;
  tireInventory = tireInventory.filter(
    (tire) => tire.brand !== soldTires.brand || tire.size !== soldTires.size
  );
  tiresSold.push(soldTires);
  res.json(tireInventory);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
