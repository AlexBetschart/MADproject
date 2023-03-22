const images = [
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
let CurrCorrect;
let gameScore = 0;

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
//loadImages();

/**
 * all code that needs to be run before the game can be played
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

    loadWord();
};

/**
 * loads the word that is being guessed
 *
 * Author: Ethan Cooke
 */
function loadWord() {
    let word = "<img id='wordImg' src=\"" + wordImages[CurrCorrect] + '">';
    document.getElementById("textImg").innerHTML = word;
}

/**
 * changes contents of html file if answer is correct
 *  and increments the score by 1
 *
 *  Author: Rian Ahmed,
 *          Ethan Cooke (Created play again button)
 *          Travis Burke (Show success images)
 */
function onSuccess() {
    document.getElementById("titleRow").innerHTML =
        "<div class='play-again'>" +
        "<button class=\"play-button\">si'owa'si?</button>" +
        "</div>";
    gameScore++;
    sessionStorage.setItem("Score", gameScore);

    //Display Success images
    $("#TopStar").show();
    $("#Success").show();
    $("#BottomStar").show();
}

/**
 * changes contents of html file if answer is incorrect
 *  and keeps the score the same
 *
 *  Author: Rian Ahmed
 *          Travis Burke (Show success images)
 */
function onFailure() {
    //Display Faliure images
    $("#TopSun").show();
    $("#oops").show();
    $("#BottomSun").hide();
}

/**
 * resets the game to its original state but keeps the Score
 *  by storing it in the session storage.
 *
 *  Author: Rian Ahmed
 */
function resetGame() {
    sessionStorage.setItem("Score");
    location.reload();
}

/**
 * plays the audio of the current correct answer
 *
 * Author: Ethan Cooke
 */
function playAudio() {
    let audio = new Audio(audios[CurrCorrect]);
    audio.play();
}

/**
 * Generates a random number between 0 and n
 * @param n Any int. Exclusive upper bound of possible numbers to generate
 * @returns x where 0 <= x < n
 * Author: Alex Betschart
 */
function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

/**
 * The purpose of this function is to store the id of the element being
   dragged in a common storage area, under the key "text".
 *
 * This function runs as soon as an element has begun to be dragged.   
 *
 * @param ev The event being referenced.
 * Author: Travis Burke
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
 * @param imageNum The ID of the correct image.
 * Author: Travis Burke 
 */
function allowDrop(ev) {
    //prevent default browswer behavior.
    ev.preventDefault();

    // Loop through the image IDs
    for (var i = 1; i <= 9; i++) {
        // Use jQuery to select the image by its ID and hide it if it is the correct word.
        if (i == CurrCorrect) {
            $("#image" + i).hide();
            console.log("allowDrop:" + ev.target.id.charAt($("#image" + i)));
        }
    }
}

/**
 * The purpose of this function is: to allow a dropped element to acquire a
   new position; retrieve the id of the dropped element using the key "text";
   and to set the new position of the dropped element; respectively. 
 * 
 * This function also compares the id of the dragged element with the id of
   where the element is dropped.
 *  
 * @param ev The event being referenced.
 * Author: Travis Burke 
 */
function drop(ev) {
    //prevent default browswer behavior.
    ev.preventDefault();

    // Loop through the target IDs
    for (var i = 1; i <= 9; i++) {
        // Use jQuery to select the image by its ID and hide it if it is the correct word.
        if (i == CurrCorrect) {
            let newLocId = ev.target.id.charAt($("#target" + i));
        }
    }
    console.log("drop:" + newLocId);

    // contains the id of the element that was being dragged
    let data = ev.dataTransfer.getData($("text"));
    ev.target.appendChild(document.getElementById(data));

    //this needs to be changed to display the propper image.
    if (data == newLocId) {
        // call success function
        onSuccess();
        console.log("kelu'lk tela'tekn (Good Job)");
    } else {
        //call failure function
        onFailure();
        console.log("tknu'kwalsi ap (Try Again)");
    }
}
