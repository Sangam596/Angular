const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyparser.json());

app.use(cors());

app.get('/',(req,res)=>
res.send('Hello From Server')
);

app.post('/enroll',(req,res)=>
{
  console.log(req.body);
  res.status(200).send("message: Data Recieved")
});

app.listen(PORT,()=>
console.log("Server running on localhost "+PORT)
);