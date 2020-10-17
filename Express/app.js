const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Server express is running.');
});

app.post('/', (req, res) => {
  res.status(404).send('This is post method');
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
