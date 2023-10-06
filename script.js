'use strict'

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read === true){
            return `${title} by ${author}, ${pages} pages, read.`
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet.`
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const Dune = new Book("Dune", "Frank Herbert", 295, true);
console.log(theHobbit);

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach(Book => {
        let div = document.createElement("div");
        let ul = document.createElement("ul");
        div.classList.add("card");
        ul.classList.add("card-list");
        div.id = Book.title;
        ul.id = `${Book.title}-list`;
        document.body.appendChild(div);
        document.getElementById(Book.title).appendChild(ul);
        for (const key in Book) {
            if (key != "info"){
                let li = document.createElement("li");
                li.innerHTML = Book[key];
                document.getElementById(`${Book.title}-list`).appendChild(li);
            }
        }
    });
}

function displayNewBook(book) {
    let div = document.createElement("div");
    let ul = document.createElement("ul");
    div.classList.add("card");
    ul.classList.add("card-list");
    div.id = book.title;
    ul.id = `${book.title}-list`;
    document.body.appendChild(div);
    document.getElementById(book.title).appendChild(ul);
    for (const key in book) {
        if (key != "info"){
            let li = document.createElement("li");
            li.innerHTML = book[key];
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


