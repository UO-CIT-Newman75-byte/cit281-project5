const { get } = require("http");

class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  
  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}`)
      }
    }
    deleteBook(isbn) {
        let indexMatch;
        // iterate(i.e for loop) through the book array to compare isbn
        // this._books
        

        // this._books = [...this._books.slice(0, indexMatch), ...this._books.slice(indexMatch+1, this._books.length)]

    }
  }

  // Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theShining = new Book("The Shining", "Stephen King", "1/28/1977", "0111000");
const dreamTown = new Book("Dream Town", "David Baldacci", "4/19/2022", "0011100");

// Add book to library and output library count and books
library.addBook(atomicHabits);
console.log(`Book count: ${library.count}`);
library.listBooks();

library.addBook(theShining);
console.log(`Book count: ${library.count}`);
library.listBooks();

library.addBook(dreamTown);
console.log(`Book count: ${library.count}`);
library.listBooks();