const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/test.json`));

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'ok',
    result: tours.length,
    data: { tours },
  });
});

app.post('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: 'Successfully',
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev/test.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: 'Successfully Created the resource',
      data: {
        tour: newTour,
      },
    });
  });
  res.send('Done');
});

// app.post('/', (req, res) => {
//   console.log('Yes...');
// });

const port = 3000;

app.listen(port, () => {
  console.log(`The Application listing on port${port}`);
});
