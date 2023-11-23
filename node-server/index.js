const express = require('express');

const app = express();

let time = 0;

setInterval(() => {
  time++
}, 1000)

app.get('/', (req, res) => {
  res.send('Hello World! v6.0.0');
})

app.get('/health', (req, res) => {
  time <= 15 ? res.status(200).send("ok") : res.status(500)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})