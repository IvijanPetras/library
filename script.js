window.addEventListener("DOMContentLoaded", () => {
  const bookName = document.querySelector("#title");
  const bookAuthor = document.querySelector("#author");
  const bookPages = document.querySelector("#pages");
  const bookSubmit = document.querySelector("#submit");
  const bookContainer = document.querySelector(".book-card-container");
  const addBook = document.querySelector(".add-book");
  const bookFormContainer = document.querySelector(".book-form");
  const closeForm = document.querySelector(".close-form");

  let myLibrary = [
  ];

  const Book = function (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
  };

  function bookToCard() {
    myLibrary.map((book) => {
      const newEl = document.createElement("div");
      newEl.className = "newEl";
      const btnContainer = document.createElement("div");
      btnContainer.className = "btn-container";
      const cardTitle = document.createElement("h2");
      cardTitle.innerText = "Title: " + book.title;
      const cardAuthor = document.createElement("h3");
      cardAuthor.innerText = "Author: " + book.author;
      const cardPages = document.createElement("h4");
      cardPages.innerText = "Pages: " + book.pages;
      const readCheck = document.createElement("button");
      readCheck.className = "btn-read";
      readCheck.innerText = "Read";
      readCheck.addEventListener("click", () => {
        if (readCheck.innerHTML == "Read") {
          readCheck.classList.toggle("btn-not-read");
          readCheck.innerHTML = "Not Read";
          myLibrary[myLibrary.indexOf(book)].read = false;
        } else {
          readCheck.className = "btn-read";
          readCheck.innerHTML = "Read";
          myLibrary[myLibrary.indexOf(book)].read = true;
        }
        console.log(myLibrary[myLibrary.indexOf(book)].read,myLibrary);

      });
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-book";
      removeBtn.innerText = "X";
      removeBtn.addEventListener("click", () => {
        const index = myLibrary.indexOf(book);
        if (index > -1) {
          myLibrary.splice(index, 1);
        }
        const imidiateParent = removeBtn.closest(".newEl");
        imidiateParent.remove();
        //console.log(myLibrary,index, 'remove');
      });
      btnContainer.append(readCheck,removeBtn);
      newEl.append(cardTitle, cardAuthor, cardPages, btnContainer);
      bookContainer.append(newEl);
      console.log(myLibrary, "bookthecard");
    });
  }

  function addBookToLibrary() {
    let newBook = new Book(bookName.value, bookAuthor.value, bookPages.value);
    myLibrary.push(newBook);
    bookName.value = null;
    bookAuthor.value = null;
    bookPages.value = null;
    console.log(newBook.read);
  }

  bookSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (bookAuthor.value == "" || bookName.value == "" || bookPages.value == "")
      return alert("Fill all the fields!");
    bookContainer.innerHTML = null;
    addBookToLibrary();
    bookToCard();
    addBook.focus();
    bookFormContainer.classList.remove("book-form-clicked");
  });

  addBook.addEventListener('click', () => {
    bookFormContainer.classList.add("book-form-clicked");
    bookName.focus();
  });
  closeForm.addEventListener('click', () => {
    bookFormContainer.classList.remove("book-form-clicked");
  })

  console.log();
});
