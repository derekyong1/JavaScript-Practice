import Book from "./Book.js";

const favBook = new Book(
    "Think and Grow Rich",
    "Napoleon Hill",
    "white",
    256,
    "June 20, 2020 15:00:00 EST"
);

const nextBook = new Book (
    "The Power of Letting Go: How to drop everything that’s holding you back",
    "John Purkiss",
    "white",
    208,
    "August 11, 2021 15:00:00 EST"
)

console.log("My favorite book", favBook.bookName);
console.log("I have this book for", favBook.bookAge(), "days");
console.log(" ");
console.log("My next book", nextBook.bookName);
console.log("I have this book for", nextBook.bookAge(), "days");




