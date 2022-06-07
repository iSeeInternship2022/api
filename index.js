import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import router from './src/routes/index.js';
import cors from "cors"
const mongoString = process.env.DATABASE_URL

//----------------------------
// Handle database connection
//----------------------------
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
})

database.once('connected', () => {
    console.log('Database Connected');
})


//----------------------------
//      Handle routing 
//----------------------------
const app = express()
app.use(cors());
app.use(express.json());

app.use('/api', router)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})