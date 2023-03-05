let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayBooks() {
  let divContainer = document.querySelector('#card-container');
  for (const book of myLibrary) {
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const divTitle = document.createElement('div');
    divTitle.classList.add('card-text', 'card-title');
    divTitle.textContent = `${book.title}`;
    divCard.appendChild(divTitle);
    const divText = document.createElement('div');
    divText.classList.add('card-text');
    divText.textContent = `by`;
    divCard.appendChild(divText);
    const divAuthor = document.createElement('div');
    divAuthor.classList.add('card-text', 'card-author');
    divAuthor.textContent = `${book.author}`;
    divCard.appendChild(divAuthor); 
    const divPages = document.createElement('div');
    divPages.classList.add('card-text', 'card-pages');
    divPages.textContent = `${book.pages} pages`;
    divCard.appendChild(divPages);
    const divRead = document.createElement('div');
    divRead.classList.add('card-text', 'card-read');
    divRead.textContent = `${book.isRead ? 'Read' : 'Not yet read'}`;
    divCard.appendChild(divRead);
    
    divContainer.appendChild(divCard)
  }
}

addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('The Time Machine', 'H. G. Wells', 84, false);
addBookToLibrary('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 42, false);
addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('The Time Machine', 'H. G. Wells', 84, false);
addBookToLibrary('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 42, false);
addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('The Time Machine', 'H. G. Wells', 84, false);
addBookToLibrary('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 42, false);

displayBooks();