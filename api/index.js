import express from 'express';
import mongoose from 'mongoose';
// import MONGODB_URI from '../.env'
// import '.dotenv/config'
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import bodyParser from 'body-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    ()=>{console.log('Mongodb is connnected');
}).catch(err => {
    console.log(err);
});
const app = express();

app.use(express.json()); 
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

