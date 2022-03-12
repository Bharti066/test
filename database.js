const mongoose = require ('mongoose')
const env = require('dotenv').config();

// var MongoClient = require('mongodb').MongoClient;
// console.log(process.env.url)

mongoose.connect(process.env.url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});
