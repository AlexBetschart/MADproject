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
 * Author: Travis Burke 
 */
function allowDrop(ev) {
    console.log("allowDrop:" + ev.target.id.charAt(1));
    ev.preventDefault();
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

    // contains the id of the element that was being dragged
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    if (data == newLocId) {
        //ned to make it display button for good job and (star images)
        console.log("kelu'lk tela'tekn (Good Job)");
    } else {
        //need to make it display button for try again and (sunflower images)
        console.log("tknu'kwalsi ap (Try Again)");
    }
}
