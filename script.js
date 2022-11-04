window.addEventListener('DOMContentLoaded', () => {

    const bookName = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookPages = document.querySelector('#pages');
    const bookSubmit = document.querySelector('#submit');
    const bookContainer = document.querySelector('.book-card-container');

    let myLibrary = [];


    
       const Book = function(title,author,pages){
            this.title = title;
            this.author = author;
            this.pages = pages;
        };

    function bookToCard(){
        myLibrary.map((book) => {
            let newEl = document.createElement('div');
            newEl.className = 'newEl';
            let cardTitle = document.createElement('h2');
            cardTitle.innerText = 'Title: ' + book.title;
            let cardAuthor = document.createElement('h3');
            cardAuthor.innerText = 'Author: ' + book.author;
            let cardPages = document.createElement('h4');
            cardPages.innerText = 'Pages: ' + book.pages;
            newEl.append(cardTitle,cardAuthor,cardPages);
            bookContainer.append(newEl);
        });
    };

    function addBookToLibrary(){
        let newBook = new Book(bookName.value,bookAuthor.value,bookPages.value);
        console.log(newBook)
        myLibrary.push(newBook);
        bookName.value = null;
        bookAuthor.value = null;
        bookPages.value = null;
    };



    bookSubmit.addEventListener('click', (e) => {
       // if(!bookAuthor || !bookName || !bookPages) return;
       e.preventDefault();
       bookContainer.innerHTML = null;
        addBookToLibrary();
        bookToCard();
        console.log(myLibrary)

    });



});