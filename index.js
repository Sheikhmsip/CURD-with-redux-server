const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middilware
app.use(cors());
app.use(express.json());

//base route
app.get('/', (req, res) => {
  res.send('Hello from CURD with redux server');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
