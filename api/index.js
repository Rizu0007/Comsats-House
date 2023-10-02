import dotenv from 'dotenv'

import express from 'express'

import mongoose from 'mongoose'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });




const app=express();

app.listen(5000 , ()=>{

    console.log(`server is running 3000`)
})


app.get('/test' , (req , res)=>{
  res.send('hello word')
})