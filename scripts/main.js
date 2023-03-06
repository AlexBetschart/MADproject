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
 * Author: Travis Burke 
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * The purpose of this function is: to allow a dropped element to acquire a
   new position; retrieve the id of the dropped element using the key "text";
   and to set the new position of the dropped element; respectively. 
 * 
 * @param ev The event being referenced.
 * Author: Travis Burke 
 */
function drop(ev) {
    ev.preventDefault();
    // contains the id of the element that was being dragged
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
