var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// routes
// app.use('/', (req,res) => {
//   res.json({
//     message:'hello World'
//   })
// });

if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*' , (req, res) => {
    res.sendFile(path.resolve(__dirname,'client', 'build' , 'index.html'))
  })
}

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log('server running on port ' + port);
  
})

