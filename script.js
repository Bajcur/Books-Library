'use strict'

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read === "yes"){
            return `${title} by ${author}, ${pages} pages, read.`
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet.`
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read");
const Dune = new Book("Dune", "Frank Herbert", 295, "read");
console.log(theHobbit);

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach(Book => {
        displayNewBook(Book);
    });
}

function displayNewBook(book) {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const header = document.createElement("div");
    div.classList.add("card");
    ul.classList.add("card-list");
    header.classList.add("header-title");
    div.id = book.title;
    ul.id = `${book.title}-list`;
    header.id = `${book.title}-header`;
    header.textContent = book.title.toUpperCase();
    document.getElementById("shelves").appendChild(div);
    document.getElementById(book.title).appendChild(header);
    document.getElementById(book.title).appendChild(ul);
    removeButton(book);
    toggleStatus(book);
    for (const key in book) {
        if (key === "author") {
            let li = document.createElement("li");
            li.textContent = `Author: ${book[key]}`;
            document.getElementById(`${book.title}-list`).appendChild(li);
        } if (key === "pages") {
            let li = document.createElement("li");
            li.textContent = `Pages: ${book[key]}`;
            document.getElementById(`${book.title}-list`).appendChild(li);
        } if (key === "read") {
            let li = document.createElement("li");
            li.id = `${book.title}-status`;
            li.textContent = `Status: ${book[key]}`;
            document.getElementById(`${book.title}-list`).appendChild(li);
        }
    }
}

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", (event) => {
  favDialog.showModal();
  document.getElementById("newBookForm").reset();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let radio = favDialog.querySelector('input[type=radio][name=if_read]:checked');
  let newBook = new Book(title.value, author.value, pages.value, radio.id);
  console.log(newBook);
  addBookToLibrary(newBook);
  displayNewBook(newBook);
  favDialog.close();
});

function removeButton(book) {
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-buttons");
    removeButton.textContent = "X"
    document.getElementById(book.title).appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        console.log(myLibrary.indexOf(book));
        myLibrary.splice(myLibrary.indexOf(book), 1);
        console.log(myLibrary);
        document.getElementById(book.title).remove();
    })
}

function toggleStatus(book) {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-buttons");
    toggleButton.textContent = "Change read status";
    document.getElementById(book.title).appendChild(toggleButton);
    toggleButton.addEventListener("click", () => {
        if (book.read === "read") {
            book.read = "not read";
            document.getElementById(`${book.title}-status`).textContent = `Status: ${book.read}`;
            console.log(book);
        } else {
            book.read = "read";
            document.getElementById(`${book.title}-status`).textContent = `Status: ${book.read}`;
            console.log(book);
        }
    })

}

addBookToLibrary(theHobbit);
addBookToLibrary(Dune);
displayLibrary();
console.log(myLibrary);

