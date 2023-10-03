import dotenv from 'dotenv'

import express from 'express'

import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
  import  authRouter from './routes/auth.route.js'
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
app.use(express.json());

app.listen(5000 , ()=>{

    console.log(`server is running 5000`)
})


app.use('/api/user' ,userRouter);
app.use('/api/auth' ,authRouter);