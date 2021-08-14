/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
 import Backpack from "./Backpack.js";

 const everydayPack = new Backpack(
   "Everyday Pack",
   30,
   "grey",
   15,
   26,
   26,
   false,
   "December 5, 2018 15:00:00 PST"
 );
 
 const content = "<h1>" + everydayPack.name + "</h1>";

 //strings do not accept any type of template tags
 //To use string, we need to do string concatenation

 // this method is messy and now we cannot access template variables
 // template literals is the better way than this method

 
 document.body.innerHTML = content;
 
 console.log("The everydayPack object:", everydayPack);
 console.log("The pocketNum value:", everydayPack.pocketNum);
 console.log("Days since aquired:", everydayPack.backpackAge());