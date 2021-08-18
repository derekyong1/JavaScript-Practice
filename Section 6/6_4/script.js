/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

 var color = "purple";

 document.querySelector(".left").style.backgroundColor = color;
 document.querySelector(".left .color-value").innerHTML = color;
 
 color = "skyblue";
 
 function headingColor() {
    let color = "blue";
   document.querySelector(".title").style.color = color;
 }
 
 headingColor();
 
 document.querySelector(".right").style.backgroundColor = color;
 document.querySelector(".right .color-value").innerHTML = color;


 // let: assigns mutable variables in a specific scope
 // if it is global let variable, it will apply everywhere until you redeclare it
 // For most situations, when you want to use a changeable or mutable variable, use let


 // var is only really useful if you want a mutable variable with global scope all the time.
 // quite rare