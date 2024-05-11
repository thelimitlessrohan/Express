const express = require('express');
const app = express();

const port = 3030;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// app.use((req,res) => {
//   console.log("Request Recieved");
//   res.send("this is a response");
// });

// app.get("/",(req,res) => {
//   res.send("You are on home ")
// });

// app.get("/apple",(req,res) => {
//   res.send("You are on apple path ")
// });

// app.get("/orange",(req,res) => {
//   res.send("You are on orange ")
// });

// app.get("*",(req,res) => {
//   res.send("You are on Undifined path ")
// });

// app.get("/:username",(req,res) => {
//   let {username} = req.params;
//   res.send(`You are on home of @${username} `)
// });

app.get("/search",(req,res) => {
  console.log(req.query);
  let {q} = (req.query);
  res.send(`You search result @${q} `)
});