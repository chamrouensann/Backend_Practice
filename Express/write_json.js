const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
const port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev/test.json`));

app.post('/api/tours/json', (req, res) => {
  console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev/test.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: 'success created',
      data: { tours },
    });
  });

  res.send('Done of creating');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
