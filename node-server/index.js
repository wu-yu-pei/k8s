const express = require('express');
const os = require("os")

const app = express();

let time = 0;

setInterval(() => {
  time++
}, 1000)

app.get('/', (req, res) => {
  res.send(`Hello World v11.0.2! hostName -> ${os.hostname()} time -> ${time}s ${process.DB_URL || process.env.DB_URL}`);
})

app.get('/health', (req, res) => {
  res.status(200).send("ok")
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})