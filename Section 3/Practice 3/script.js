/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import PencilPouch from "./PencilPouch.js";

const myPencilPouch = new PencilPouch(
    "My Pencil Pouch",
    10,
    3,
    "blue",
    3 
);

console.log("My Pencil Pouch:", myPencilPouch);
console.log("It can hold", myPencilPouch.pencilHolderNum, "pencils");

