const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
app.use(cors());
const url = "mongodb://localhost:27017/complex";



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/api/event', require('./routes/addEnter'));
app.use('/api/order', require('./routes/order'));

const mongoose = require("mongoose");
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.listen(5000, () => {
    console.log(5000);
});
