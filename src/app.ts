import express = require('express');

// Create a new express application instance
const app: express.Application = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err: Error) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Example app listening on port ${port}!`);
});