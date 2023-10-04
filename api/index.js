import dotenv from 'dotenv'

import express, { json } from 'express'

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

app.use((err , req , res , next)=>{
  const statusCode=err.statusCode||500;
  const message=err.message||"internal server error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,


  })
})