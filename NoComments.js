var express = require('express'); //Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

var fs = require('fs'); //fs library gives access to the computer's file system so files can be written to disk.
var request = require('request'); //simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
var cheerio = require('cheerio'); //jQuery designed specifically for the server.
var app = express();
app.get('/scrape', function(req, res) {


  url = 'http://www.imdb.com/title/tt1229340/'; // The URL we will scrape from - in our example Anchorman 2.

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

        // My code
        // Get Method-1 jQuery navigate and get:       
        title = jQuery(".title_block .title_wrapper h1").title.firstChild.nodeValue //Gets all text (title and release) as trimmed text.
        console.log('title: ', title);

        release = jQuery(".title_block .title_wrapper h1 a").text();
        console.log('release: ', release);

        rating = $(".subtext meta")[0].content //Gets rating from the class '.subtext'     
        console.log('rating: ', rating);


        // Get Method-2 no jQuery
        // getElementsByTagName navigate and get:
        // title = data.children().first().text();
        // title = document.getElementsByTagName('h1')[1].innerHTML
        // year = document.getElementsByTagName('h1')[1].children[0].innerText

        //   json.title = title; // Once we have our title, we'll store it to the our json object.

        //   json.release = release; // Once again, once we have the data extracted we'll save it to our json object    
        // })

        // $('.star-box-giga-star').filter(function() {

        //   var data = $(this);

        // The .star-box-giga-star class was exactly where we wanted it to be.
        // To get the rating, we can simply just get the .text(), no need to traverse the DOM any further

        // rating = data.text();
        // json.rating = rating;

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
    res.send('Something here, Dave.  Check your console and project output file!')

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

//IDEA: Use regular expression to extract strings from html elements.