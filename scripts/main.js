/*
The purpose of this file is to define functions for use in multiplechoice.html

Authors: Rian Amhed (A00437022)
         Rishi Bhalla 
         Alex Bestchart
         Travis Burke (A00418937) focused onDragand drop.
         Ethan Cooke (A00446392)
*/

// Global Variables
const images = [
        //aray of face images
        "resources/images/guessImages/aqq.jpg",
        "resources/images/guessImages/eliey.jpg",
        "resources/images/guessImages/kesalk.jpg",
        "resources/images/guessImages/kil.jpg",
        "resources/images/guessImages/ltu.jpg",
        "resources/images/guessImages/mijisi.jpg",
        "resources/images/guessImages/nin.jpg",
        "resources/images/guessImages/teluisi.jpg",
        "resources/images/guessImages/wiktm.jpg",
    ],
    audios = [
        // array of audio files
        "resources/audios/aqq.wav",
        "resources/audios/eliey.wav",
        "resources/audios/kesalk.wav",
        "resources/audios/kil.wav",
        "resources/audios/ltu.wav",
        "resources/audios/mijisi.wav",
        "resources/audios/nin.wav",
        "resources/audios/teluisi.wav",
        "resources/audios/wiktm.wav",
    ],
    wordImages = [
        //array of word images
        "resources/images/words/aqqText.jpg",
        "resources/images/words/elieyText.jpg",
        "resources/images/words/kesalkText.jpg",
        "resources/images/words/kilText.jpg",
        "resources/images/words/ltuText.jpg",
        "resources/images/words/mijisiText.jpg",
        "resources/images/words/ninText.jpg",
        "resources/images/words/teluisiText.jpg",
        "resources/images/words/wiktmText.jpg",
    ];
let CurrCorrect; // holds the randomly generated value corresponding to the correct image, audio and word.
let gameScore = 0; //holds the score, initially 0.
let totalRounds = 0; //holds the total number of rounds

// define the base URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:3085";

/**
 * The purpose of this function is to load the images into the grid when the grid is loaded
 *  in the html file. Can be used for dynamically loading images.
 *
 * Authors: Alex Bestchart wrote initial function.
 */
function loadImages() {
    for (var i = 0; i < images.length; i++) {
        if (i < 3) {
            $("topMid").append(
                "<img id='" + i + "' src='" + images[i] + "' />"
            );
        } else if (i < 6) {
            $("midMid").prepend(
                "<img id='" + i + "' src='" + images[i] + "' />"
            );
        } else if (i < 9) {
            $("bottomMid").prepend(
                "<img id='" + i + "' src='" + images[i] + "' />"
            );
        }
        console.log("hello" + i + id);
    }
}

/**
 * The purpose of this function is to load all code that needs to be run before
 * the game can be played.
 *
 * Generates arandom number from 1-9 and store it in the CurrCorrect variable
 *
 * hide the onSuccess/on failure images.
 *
 * loop through the images array and show them in the grid.
 *
 * Authors: Ethan Cooke (created stub/added loadWord())
 *          Travis Burke (hide and showimages)
 */
window.onload = function loadGame() {
    CurrCorrect = randomNumber(9);

    //Hide success and oops images on start.
    $("#TopStar").hide();
    $("#TopSun").hide();
    $("#oops").hide();
    $("#Success").hide();
    $("#BottomStar").hide();
    $("#BottomSun").hide();

    // Loop through the image IDs
    for (var i = 1; i <= 9; i++) {
        // Use jQuery to select the image by its ID and show it
        $("#image" + i).show();
    }

    //Fix title row css on reset
    $("#titleRow").css("justify-content", "center");
    // Score button need to add variables
    loadWord();
};

/**
 * The purpose of this file is to load the word that is being guessed
 * so it can be displayed on the top of the grid.
 *
 * Author: Ethan Cooke (Wrote initial function)
 */
function loadWord() {
    let word = "<img id='wordImg' src=\"" + wordImages[CurrCorrect - 1] + '">';
    document.getElementById("textImg").innerHTML = word;
}

/**
 * The purpose of this file is to change the contents of html file if answer
 * is correct and increment the score by 1.
 *
 *  Author: Rian Ahmed wrote initial function.
 *          Ethan Cooke (Created play again button)
 *          Travis Burke (Show success images and bear)
 *          Rian Ahmed (Added a increment for gamescore and total rounds)
 */
function onSuccess() {
    document.getElementById("titleRow").innerHTML =
        "<div class='play-again'>" +
        '<button id="play-button" onclick="resetGame()">si\'owa\'si?</button>' +
        "</div>";
    gameScore++;
    totalRounds++;
    //sessionStorage.setItem("Score", gameScore);

    // remember to put browser to server communication for storing rounds and score.

    //make the bear not movable
    $("#bearImage").css("pointer-events", "none");

    //Display Success images
    $("#TopStar").show();
    $("#Success").show();
    $("#BottomStar").show();
}

/**
 * The purpose of this function is to change the
 * contents of html file if answer is incorrect and keep the score the same.
 *
 *  Author: Rian Ahmed
 *          Travis Burke (Show success images and bear)
 *          Ethan Cooke (Added play again button)
 *          Rian Ahmed (Added an increment for total rounds)
 */
function onFailure() {
    document.getElementById("titleRow").innerHTML =
        "<div class='play-again'>" +
        '<button id="play-button" onclick="resetGame()">si\'owa\'si?</button>' +
        "</div>";
    totalRounds++;
    //sessionStorage.setItem("Score", gameScore);

    // remember to put browser to server communication for storing rounds and score.

    //make the bear not movable
    $("#bearImage").css("pointer-events", "none");

    //Display Faliure images
    $("#TopSun").show();
    $("#oops").show();
    $("#BottomSun").show();
}

/**
 *  The purpose ofthis function is to reset the game to its original
 *  state but keeps the Score by storing it in the session storage.
 *
 *  Author: Rian Ahmed wrote initial function.
 */
function resetGame() {
    //sessionStorage.setItem("Score");
    location.reload();
}

/**
 * THe purpose of this function is to play the audio of the current correct answer.
 * This function is called when the audio buttonis clicked.
 *
 * Author: Ethan Cooke. Wrote initial function.
 */
function playAudio() {
    let audio = new Audio(audios[CurrCorrect - 1]);
    audio.play();
}

/**
 * The purpose ofthis functionis to generate a random number between 1 and n
 *
 * @param n Any int. Exclusive upper bound of possible numbers to generate
 * @returns x where 1 <= x < n
 * Author: Alex Betschart: Wrote initial function.
 *         Travis Burke: Added the 1 so it generates (1-9).
 */
function randomNumber(n) {
    return Math.floor(Math.random() * n) + 1;
}

/**
 * The purpose of this function is to store the id of the element being
   dragged in a common storage area, under the key "text".
 *
 * This function runs as soon as an element has begun to be dragged.   
 *
 * @param ev The event being referenced.
 * Author: Travis Burke. Wrote initial function.
 */
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
/**
 * The purpose of this function is to suspend the default behaviour so that
   instead the dragged element can potentially end up with a new position. 
 * 
 * This function runs when a dragged element is over a potential target.
 * 
 * @param ev The event being referenced.
 * Author: Travis Burke. Wrote initial function.
 */
function allowDrop(ev) {
    //prevent default browswer behavior.
    ev.preventDefault();

    let i = CurrCorrect;

    console.log("allowDrop:" + ev.target.id.charAt($("#target" + i)));
}

/**
 * The purpose of this function is: to allow a dropped element to acquire a
   new position; retrieve the id of the dropped element using the key "text";
   and to set the new position of the dropped element; respectively. 
 * 
 * This function also compares the id of the dragged element with the id of
   where the element is dropped anduses that to call onSuccess() and 
   OnFailure functions.
 *  
 * @param ev The event being referenced.
 * Author: Travis Burke. Wrote initial function. 
 *         Rian Ahmed, made the images dissapear on bear drop.
 */
function drop(ev) {
    //prevent default browser behavior.
    ev.preventDefault();

    let newLocId = ev.target.id;
    $("#" + newLocId).css("display", "none");

    // get the number of the image from the droppable element's ID
    let num = newLocId.replace("target", "");

    // use jQuery to select the div containing the image and append the draggable element to it
    $("#target" + num).append($("#" + ev.dataTransfer.getData("text")));

    newLocId = "target" + newLocId;
    //this needs to be changed to display the proper image.
    if ("target" + CurrCorrect.toString() == newLocId) {
        // call success function
        onSuccess();
        console.log("kelu'lk tela'tekn (Good Job)");
    } else {
        //call failure function
        onFailure();
        console.log("tknu'kwalsi ap (Try Again)");
    }
}

/**
 * The purpose of this function is to make sure that
 * when the bear is dragged on top of any images on
 * the grid the opacity is set to 0.
 *
 * @param {ev} = ev is the event being referenced.
 * Author: Rian Ahmed. Wrote initial function.
 */
function dragEnter(ev) {
    let id = ev.target.id;
    $("#" + id).css("opacity", "0");
}

/**
 * The purpose of this function is to make sure that
 * when the bear is dragged away from any images on
 * the grid the visibility returns.
 *
 * @param {ev} ev is event being referenced
 * Author: Rian Ahmed. Wrote initial function.
 */
function dragLeave(ev) {
    let id = ev.target.id;
    $("#" + id).css("opacity", "1");
}

function displayWord() {
    $("#audio-button").css("display", "inline-block");
    $("#wordImg").css("display", "inline-block");
    $("#score").css("display", "none");
    $("#titleRow").css("justify-content", "start");
}