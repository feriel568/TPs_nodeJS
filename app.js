const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const userRoute = require('./routes/userRoute');

const app = express();
app.use('/',userRoute);


app.listen(process.env.PORT , () => {
    console.log(`server is running on port ${process.env.PORT}`)
} );

