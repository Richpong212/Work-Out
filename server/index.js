const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const workoutRouter = require('./routes/workout');

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => console.log(err));



//middleware
app.use(express.json());

app.use((req,res,next) =>{
    console.log(req.path.method)
    next()
})

// routes for the app
app.use('/api/workout', workoutRouter);