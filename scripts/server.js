/**
 * The purpose of this file is to create a server for the miqmaq game
 * that stores two peices of game information:
 *  
 * gameScore: The users  score which is incremented by 1 and posted to the 
 * server when onSuccess is called.
 * 
 * totalRounds: The total number fo rounds played by the user which is 
 * increemented by 1 after each round ( when onSuccess() and onFaliure()
 * are called).
 * 
 * Authors: Rian Amhed (A00437022)
            Rishi Bhalla 
            Alex Bestchart
            Travis Burke (A00418937)  wrote majority of the server side code.
            Ethan Cooke (A00446392)
 */

// allow the express framework to be accessable.
const express = require("express");

// define the top level Express function
const server = express();

// set the port where the server listens for clients
const port = 3085;

// enable the server to recognize JSON format
server.use(express.json());

// enable incoming "name":"value" pairs to be any type including arrays
server.use(express.urlencoded({ extended: true }));

/*
  The purpose of this function is to execute the instructions
  necessary: to allow a request from any origin to access this site's content;
  allow only GET and POST requests; and to only accept requests that include
  "Content-Type".

  req - request object generated by the HTTP event
  res - request object generated by the HTTP event
  next - predefined function required to be run after your middleware has run


allow only GET and POST requests; and to only accept requests that include
"Content-Type".
*/
const allowCrossDomain = function (req, res, next) {
    // allow any origin
    res.header("Access-Control-Allow-Origin", "*");
    // allow any method
    res.header("Access-Control-Allow-Methods", "GET,POST");
    // accept only headers with Content-Type included
    res.header("Access-Control-Allow-Headers", "Content-Type");
    // since this middleware function does not terminate the request/response cycle
    // the next() function must be called to continue to the succeeding middleware function
    next();
};

// set domain characteristics defined above
server.use(allowCrossDomain);


/**
 * The purpose of this function is to respond to a POST request with relative
 * endpoint: /scorePost
 * 
 * req - request object generated by the HTTP event
 * res - request object generated by the HTTP event
 * 
 * Author: Travis Burke (wrote initial function)
 *
 */ 
server.post('/scorePost', (req, res) => {
  const gameScore = req.body.gameScore;
  const totalRounds = req.body.totalRounds;

  res.send({
    gameScore: gameScore,
    totalRounds: totalRounds
  })
})


/**
 * The purpose of this function is to respond to a Get request with relative
 * endpoint: /scoreGet
 * 
 * req - request object generated by the HTTP event
 * res - request object generated by the HTTP event
 * 
 * Author: Travis Burke (wrote initial function)
 *
 */ 
server.get('/scoreGet', (req, res) => {
  const gameScore =  
  const totalRounds =  

  res.send({
    gameScore: gameScore,
    totalRounds: totalRounds
  })
})

/*
  - Access the http library
  - Use the library function createServer to preset a function call to
    myActions() whenever a client accesses ugdev.cs.smu.ca via port 3026
  - Listen on port 3026 for clients
*/
http.createServer(myActions).listen(3056);
