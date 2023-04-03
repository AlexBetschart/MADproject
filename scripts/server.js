/**
 * The purpose of this file is to create a server for the miqmaq game
 * that stores scoring information
 * 
 * Authors: Rian Amhed (A00437022)
            Rishi Bhalla 
            Alex Bestchart
            Travis Burke (A00418937) 
            Ethan Cooke (A00446392)
 */

// create an object representing the http library.
const http = require("http");

/*
  - Access the http library
  - Use the library function createServer to preset a function call to
    myActions() whenever a client accesses ugdev.cs.smu.ca via port 3026
  - Listen on port 3026 for clients
*/
http.createServer(myActions).listen(3056);
