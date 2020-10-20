const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Already get the method');
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/test.json`));

app.get('/api/json', (req, res) => {
  res.status(200).json({
    status: 'Succesfully get the API JSON file',
    result: tours.length,
    data: { tours },
  });
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
