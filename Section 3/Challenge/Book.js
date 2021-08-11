
class Book {
    constructor(
        name,
        color,
        numPages,
        dateAcquired
    ) {
        this.name = name;
        this.color = color;
        this.numPages = numPages;
        this.dateAcquired = dateAcquired;
    }
    bookAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let daysAcquired = Math.floor(elapsed /1000 * 3600 * 24);
        return daysAcquired;
    }
}

export default Book;