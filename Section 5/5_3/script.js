/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

 import Backpack from "./Backpack.js";

 const everydayPack = new Backpack(
   "Everyday Backpack",
   30,
   "grey",
   15,
   26,
   26,
   false,
   "December 5, 2018 15:00:00 PST",
   "../assets/images/everyday.svg"
 );
 
 const main = document.querySelector(".maincontent");
 
 const content = `
   <article class="backpack" id="everyday">
     <figure class="backpack__image">
       <img src=${everydayPack.image} alt="" />
     </figure>
     <h1 class="backpack__name">${everydayPack.name}</h1>
     <ul class="backpack__features">
       <li class="packprop backpack__volume">Volume:<span> ${
         everydayPack.volume
       }l</span></li>
       <li class="packprop backpack__color">Color:<span> ${
         everydayPack.color
       }</span></li>
       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
       <li class="packprop backpack__pockets">Number of pockets:<span> ${
         everydayPack.pocketNum
       }</span></li>
       <li class="packprop backpack__strap">Left strap length:<span> ${
         everydayPack.strapLength.left
       } inches</span></li>
       <li class="packprop backpack__strap">Right strap length:<span> ${
         everydayPack.strapLength.right
       } inches</span></li>
       <li class="packprop backpack__lid">Lid status:<span> ${
         everydayPack.lidOpen
       }</span></li>
     </ul>
   </article>
 `;
 
 main.innerHTML = content;

 // When dealing with class name and changing its properties, you should be very careful, because if there are other properties with the same class name, it could create a chains of problems.

 // To get around this problem, we should use classList.
 // document.querySelector("main li:first-child").classList.add("new-class")
 // you can add, remove, toggle, or replace


 //className property should be used to find the className.
 //classList should be used to edit the classList.