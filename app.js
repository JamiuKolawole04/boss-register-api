require('dotenv').config();
const express = require('express')
    , app = express()
    , authRoute = require('./route/auth')
    , connectDB = require('./db/db')
port = process.env.PORT || 8084;
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/api/v1/auth', authRoute);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server  listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};


start();
