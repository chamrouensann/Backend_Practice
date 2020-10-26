const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Already get the method');
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/test.json`));

app.get('/api/tours', (req, res) => {
  res.status(200).json({
    status: 'Succesfully get the API JSON file',
    result: tours.length,
    data: { tours },
  });
});

// app.get('/api/tours/:idNum', (req, res) => {
//   console.log(req.params);
//   res.status(200).json({
//     status: 'Succesfully get the API JSON file',
//     result: tours.length,
//     data: { tours },
//   });
// });

app.get('/api/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (id > tours.length) {
    res.status(404).json({
      status: 'Fail 404 File not found',
      message: 'File not found',
    });
  }
  res.status(200).json({
    status: 'Succesfully get the API JSON file',
    data: { tour },
  });
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
