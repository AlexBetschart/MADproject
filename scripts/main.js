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
];

$("#topMid").append("<img id='1' src='resources/images/guessImages/aqq.jpg'/>");
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
 * adds all necessary html to begin the game
 */
function startGame() {}

/**
 * changes contents of html file if answer is correct
 */
function onSuccess() {}

/**
 * changes contents of html file if answer is incorrect
 */
function onFailure() {}

/**
 * resets the game to its original state
 */
function resetGame() {
    location.reload();
}

/**
 * plays the audio of the current correct answer
 */
function playAudio() {}

/**
 * Generates a random number between 0 and n
 * @param n Any int. Exclusive upper bound of possible numbers to generate
 * @returns x where 0 <= x < n
 * Author: Alex Betschart
 */
function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

//generates random number 1 - 9.
//Alex I was thinking of integrating this withyou code with the random number generator (above)
//and we could assign the return value to correct answer and that would help us choose which
//picture and sound file isthe right one. A new number would be generated after each new game
// begins.
//window.onload = function getCorrect() {
//   let x = randomNumber(9) + 1;
//   console.log("The correct answer is : " + x);
//   document.getElementById("correctAnswer").innerHTML = x;
//};

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
    console.log("drag:" + ev.target.id);
    ev.dataTransfer.setData("text", ev.target.id);
}

/**
 * The purpose of this function is to suspend the default behaviour so that
   instead the dragged element can potentially end up with a new position. 
 * 
 * This function runs when a dragged element is over a potential target.
 * 
 * @param ev The event being referenced.
 * @param imageNum //needs comment
 * Author: Travis Burke 
 */
function allowDrop(ev, imageNum) {
    console.log("allowDrop:" + ev.target.id.charAt(1));
    ev.preventDefault();

    //this is also going to be correctAnswer
    //needs to be shown after its done
    console.log("imageNum=" + imageNum);
    $("#1").hide();
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
    // may need to be edited for 1 dropable.
    // contains the id of the new location
    let newLocId = ev.target.id.charAt(1);
    console.log("drop:" + newLocId);

    ev.preventDefault();
    $("#correctAnswer").hide();

    // contains the id of the element that was being dragged
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    //this needs to be changed to display the propper image.
    if (data == newLocId) {
        //need to make it display button for good job and (star images)
        console.log("kelu'lk tela'tekn (Good Job)");
    } else {
        //need to make it display button for try again and (sunflower images)
        console.log("tknu'kwalsi ap (Try Again)");
    }
}
