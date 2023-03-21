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
  ],
  imageIDS = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
  ];
let CurrCorrect;
let gameScore = 0;
//$("#topMid").append("<img id='1' src='resources/images/guessImages/aqq.jpg'/>");

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

window.onload = function loadGame() {
  CurrCorrect = randomNumber(9);

  //find the correct image
  for (var x = imageIDS[0]; x < imageIDS.length; x++) {
    let correctImage = imageIDS[x];
    if (correctImage == CurrCorrect) {
      image = correctImage;
    }
  }

  loadWord();
};

/**
 * loads the word that  is being guessed
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
*  Author: Rian Ahmed
 */
function onSuccess() {
  document.getElementById("titleRow").innerHTML =
    "<div class='play-again'>"
    + "<button class=\"play-button\">si'owa'si?</button>"
    + "</div>";
  gameScore++;
  sessionStorage.setItem("Score", gameScore);
}

/**
 * changes contents of html file if answer is incorrect
*  and keeps the score the same
*
*  Author: Rian Ahmed
 */
function onFailure() { }

/**
 * resets the game to its original state but keeps the Score
*  by storing it in the session storage.
*
*  Author: Rian Ahmed
 */
function resetGame() {
  sessionStorage.setItem("Score",);
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
 * The purpose of this function is to show the target image when the dragagable is not over the target.
 *
 * This function runs as soon as the dragged element has left the target..
 *
 * @param ev The event being referenced.
 * @param imageNum The ID of the correct image.
 * Author: Travis Burke
 */
function dragOff(ev, imageNum) {
  $(imageNum).show();

  ev.dataTransfer.setData("text", ev.target.id);
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
  $("bearImage").hide();
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
function allowDrop(ev, imageNum) {
  console.log("allowDrop:" + ev.target.id.charAt(1));
  ev.preventDefault();

  $(imageNum).hide();
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
function drop(ev, imageNum) {
  // may need to be edited for 1 dropable.
  // contains the id of the new location
  let newLocId = ev.target.id.charAt(imageNum);
  console.log("drop:" + newLocId);

  ev.preventDefault();
  $("bearImage").hide();

  // contains the id of the element that was being dragged
  let data = ev.dataTransfer.getData(images[CurrCorrect]);
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
