import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose, { modelNames } from 'mongoose'

import postRoute from './routes/postRoute.js'
import candRoute from './routes/candidateRoute.js'
import reportRoute from './routes/reportRoute.js'

import authRoutes from './routes/auth.js';

const app = express();
      app.use(express.json());
      app.use(bodyParser.json());
      app.use(cors());
      dotenv.config();

      app.use("/api", postRoute);
      app.use("/api", candRoute);
      app.use("/api", reportRoute);
      app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5079;
const MONGO = process.env.MONGO;

mongoose.connect(MONGO)
        .then(()=>{
            console.log("Database connected on path:", MONGO);
        app.listen(PORT, ()=>{
            console.log("Server is running on Port:", PORT);
        })    
        })
        .catch((error)=>{
            console.log("Error connecting to given server or DB creashed:", error);
        })
