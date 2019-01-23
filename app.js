// Very simple server using nodeJS

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

const server = app.listen(port, () => console.log(`Server started on port ${port}`));