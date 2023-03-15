

// function Book(title, author, pages, isRead) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.isRead = isRead;
// }

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  // get title() {
  //   return this._title;
  // }

  // set title(value) {
  //   this._title = value;
  // }
}

class Library {
  constructor() {
    this.myLibrary = [];

    // remove card
    const cardContainer = document.getElementById('card-container');
    cardContainer.addEventListener('click', (e) => {
      if(e.target.classList.contains('card-close')) {
        let cardIndex = e.target.getAttribute("index") - 1;
        this.myLibrary.splice(cardIndex, 1);
        this.displayBooks();
      }

      if(e.target.closest('.card-checkbox')) {

        let cardIndex = e.target.closest('.card-checkbox').getAttribute('index') - 1;
        this.myLibrary[cardIndex].isRead = this.myLibrary[cardIndex].isRead == true ? false : true;
        this.displayBooks();
      }
    });

    const form = document.querySelector('#form-new-book');

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      this.addBookToLibrary(form.elements["title"].value, form.elements["author"].value, form.elements["pages"].value, form.elements["isRead"].value == "yes" ? true : false);
      this.displayBooks();
      modal.style.display = 'none';
      const container = document.getElementById('card-container');
      container.scrollTo(0, container.scrollHeight);
    });

    // new book modal
    const modal = document.getElementById('new-book-modal');
    const modalBtn = document.getElementById('btn-new-book');
    const modalClose = document.getElementsByClassName('close')[0];

    modalBtn.onclick = function() {
      modal.style.display = "block";
      
      // reset form to default
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('pages').value = '';
      document.getElementById('radio-no').checked = true;
    }

    modalClose.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  }

  get myLibrary() {
    return this._myLibrary;
  }

  set myLibrary(value) {
    this._myLibrary = value;
  }

  addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    this.myLibrary.push(newBook);
  }

  displayBooks() {
    let svgUnread = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>checkbox-blank</title><path d="M3 4H4V3H18V4H19V18H18V19H4V18H3V4M5 17H17V5H5V17Z" /></svg>';
    let svgRead = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>checkbox-marked</title><path d="M3 4H4V3H18V4H17V5H5V17H17V11H18V10H19V18H18V19H4V18H3V4M6 9H8V10H9V11H10V12H12V11H13V10H14V9H15V8H16V7H17V6H18V5H19V4H21V6H20V7H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H10V14H9V13H8V12H7V11H6V9Z" /></svg>';

    let divContainer = document.querySelector('#card-container');
    divContainer.innerHTML = "";

    let index = 1;
    for (const book of this.myLibrary) {
      const divCard = document.createElement('div');
      divCard.classList.add('card');
      divCard.setAttribute('index', index);
      
      const divClose = document.createElement('div');
      divClose.classList.add('card-close');
      divClose.setAttribute('index', index);
      divClose.innerHTML = '&times';
      divCard.appendChild(divClose);
      
      const divContent = document.createElement('div');
      divContent.classList.add('card-content');
      const divTitle = document.createElement('div');
      divTitle.classList.add('card-text', 'card-title');
      divTitle.textContent = `${book.title}`;
      divContent.appendChild(divTitle);
      const divText = document.createElement('div');
      divText.classList.add('card-text');
      divText.textContent = `by`;
      divContent.appendChild(divText);
      const divAuthor = document.createElement('div');
      divAuthor.classList.add('card-text', 'card-author');
      divAuthor.textContent = `${book.author}`;
      divContent.appendChild(divAuthor); 
      const divPages = document.createElement('div');
      divPages.classList.add('card-text', 'card-pages');
      divPages.textContent = `${book.pages} pages`;
      divContent.appendChild(divPages);
      const divRead = document.createElement('div');
      divRead.classList.add('card-text', 'card-read');
      divRead.textContent = `${book.isRead ? 'Read' : 'Not yet read'}`;
      divContent.appendChild(divRead);
      const divCheckbox = document.createElement('div');
      divCheckbox.classList.add('card-checkbox');
      divCheckbox.setAttribute('index', index);
      divCheckbox.innerHTML = book.isRead ? svgRead : svgUnread;
      divContent.appendChild(divCheckbox);
      
      divCard.appendChild(divContent);
      divContainer.appendChild(divCard);
      index++;
    }
  }

  
}








let library = new Library();
library.addBookToLibrary('1984', 'George Orwell', 328, true);
library.addBookToLibrary('The Time Machine', 'H. G. Wells', 84, false);
library.addBookToLibrary('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 42, false);
library.addBookToLibrary('1984', 'George Orwell', 328, true);
console.log(library.myLibrary);

library.displayBooks();