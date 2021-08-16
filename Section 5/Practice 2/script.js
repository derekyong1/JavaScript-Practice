/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const newElement = document.querySelector(".maincontent .backpack").classList.add("new-class-one");
const newElement2 = document.querySelector(".maincontent").classList.add("new-class-two");
const removeElement = document.querySelector(".maincontent").classList.remove("new-class-two");
const newAttribute = document.querySelector(".maincontent .backpack").setAttribute("name", "theBackpack");
const changeAttribute = document.querySelector(".maincontent .backpack").setAttribute('id', 'pack2');


//paste in console
const reqAttribute = document.querySelector(".maincontent .backpack").getAttribute('id');
const inlineCSS = document.querySelector(".maincontent .backpack .feature").style.color = "red";
