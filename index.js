//1 install lib/ dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://admin:admin@ds044709.mlab.com:44709/jarec')
  .then(() => {
    console.log('DB connected')
  })
  .catch(err => console.log(err))
;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

const pants = require('./routes/pants');

app.use('/pants', pants);












app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
