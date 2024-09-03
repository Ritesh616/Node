const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send("Hi this is Ritesh Shende & i am from akluj");
});

app.listen(3000, () => {
  console.log("listing the port 3000");
});