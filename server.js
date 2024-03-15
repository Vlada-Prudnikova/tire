const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Your other routes and API endpoints here

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
