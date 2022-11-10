import express from "express";
import dotenv from 'dotenv';
import { errorHandler, unknown } from "./middleware/index.js";
const app = express();
const PORT = 4000;



// your code here
dotenv.config();
app.use((req,res,next)=>{
  if(process.env.DEBUG){
    console.log(req.url)
    next()
  }
})

app.get("/", (req, res) => {
  res.send(`Hello SuperUsers!`);
});

app.get('/multiply/:number', (req, res, next)=>{
try{
  const number = Math.floor(Math.random()* 10);
  const answer = process.env.MULTIPLIER * number;
  console.log(answer);
  res.send({answer})
}catch (error) {
  next(error);
}
  
})
app.use(unknown);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
