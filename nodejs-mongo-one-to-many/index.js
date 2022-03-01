const express = require('express')
var bodyParser = require('body-parser')
const app = express()
// var dbConfig = require('./app/config/db.config');


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/onetomany`, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./routes/product.route')(app);
require('./routes/category.route')(app);
  
app.listen(3000)