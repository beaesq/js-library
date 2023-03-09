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
  divContainer.innerHTML = "";

  let index = 1;
  for (const book of myLibrary) {
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.setAttribute('index', index);
    
    const divClose = document.createElement('div');
    divClose.classList.add('card-close');
    divClose.setAttribute('index', index)
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
    
    divCard.appendChild(divContent);
    divContainer.appendChild(divCard);
    index++;
  }
}

const form = document.querySelector('#form-new-book');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addBookToLibrary(form.elements["title"].value, form.elements["author"].value, form.elements["pages"].value, form.elements["isRead"].value == "yes" ? true : false);
  displayBooks();
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

// remove card
const cardContainer = document.getElementById('card-container');
cardContainer.addEventListener('click',(e) => {
  if(e.target.classList.contains('card-close')) {
    let cardIndex = e.target.getAttribute("index");
    myLibrary.splice(cardIndex - 1, 1);
    displayBooks();
  }
});

addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('The Time Machine', 'H. G. Wells', 84, false);
addBookToLibrary('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 42, false);
addBookToLibrary('1984', 'George Orwell', 328, true);


displayBooks();