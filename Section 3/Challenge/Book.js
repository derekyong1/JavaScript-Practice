
class Book {
    constructor(
        bookName,
        authorName,
        color,
        numPages,
        dateAcquired
    ) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.color = color;
        this.numPages = numPages;
        this.dateAcquired = dateAcquired;
    }
    bookAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let numAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return numAcquired;
    }
}

export default Book;