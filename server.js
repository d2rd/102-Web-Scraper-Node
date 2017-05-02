//This is the server that makes requests to the external website

var express = require('express');
var fs = require('fs'); //fs library gives access to the computer's file system so files can be written to disk.
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {


  url = 'http://www.imdb.com/title/tt1229340/'; // The URL we will scrape from - in our example Anchorman 2.


  // The structure of our request call
  // The first parameter is our URL
  // The callback function takes 3 parameters, an error, response status code and the html

  request(url, function(error, response, html) {



    if (!error) { // Check to make sure no errors occurred when making the request


      var $ = cheerio.load(html); //Utiltize cheerio library on the returned html (essentially gives jQuery functionality).



      var title, release, rating; // Define the variables we're going to capture
      var json = {
        title: "",
        release: "",
        rating: ""
      };
      $('.header').filter(function() {

        var data = $(this); // Store the data we filter into a variable.

        // In examining the DOM we notice that the title rests within the first child element of the header tag. 
        // Utilizing jQuery we can easily navigate and get the text by writing the following code:

        title = data.children().first().text();
        release = data.children().last().children().text();

        json.title = title; // Once we have our title, we'll store it to the our json object.

        json.release = release; // Once again, once we have the data extracted we'll save it to our json object    
      })

      $('.star-box-giga-star').filter(function() {

        var data = $(this);

        // The .star-box-giga-star class was exactly where we wanted it to be.
        // To get the rating, we can simply just get the .text(), no need to traverse the DOM any further

        rating = data.text();
        json.rating = rating;

      })

    }

    // To write to the system we will use the built in 'fs' library. 
    // In this example we will pass 3 parameters to the writeFile function
    // Parameter 1 :  output.json - this is what the created filename will be called
    // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
    // Parameter 3 :  callback function - a callback function to let us know the status of our function

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('Check your console!')

  })
})

app.listen('8081');
console.log('Magic happens on port 8081');
Export = module.exports = app;


//Title wrapper has changed from tutorial.  Must adapt to match current code.  See below:
//
//   <h1 itemprop="name" class="">Anchorman 2: The Legend Continues&nbsp;<span id="titleYear">   
//   (<a href="/year/2013/?ref_=tt_ov_inf">2013</a>)</span> </h1>


//.filter may not work.