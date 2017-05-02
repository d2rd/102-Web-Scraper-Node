var express = require('express');
var fs = require('fs');
var request = require('require');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {

  //All the web scriping magic will happen here

})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;