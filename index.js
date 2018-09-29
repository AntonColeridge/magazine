//SETUP=============================================
const express = require('express');
const bodyParser = require('body-parser');
const {apiRouter} = require('./api');
const app = express();
const port = process.env.port || 8080;

//CONFIGURATION=====================================
app.use('/api',
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    apiRouter
);



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
