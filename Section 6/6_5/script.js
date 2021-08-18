/**
 * The const statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

 const color = "purple";

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


 // script breaks at line 11, because you cannot reassign a const variable 