const express = require('express');
const fs = require('fs');

const app = express();

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/test.json`));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/test.json`));

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'ok',
    result: tours.length,
    data: { tours },
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`The Application listing on port${port}`);
});
