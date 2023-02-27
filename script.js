
let myLibrary = [];

const title_form = document.getElementById('title');
const author_form = document.getElementById('author');
const pages_form = document.getElementById('pages');
const read_form = document.getElementById('read');


const submit_button = document.querySelector('.submit-button')
const book_creation =  document.querySelector('.item-container')
const popup_div = document.querySelector('.pop-up-container')

function openForm() {
  popup_div.style.display = "block";
}

function closeForm() {
  popup_div.style.display = "none";
}


function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages = pages
    this.read=read
    // this.info = function (){
    //   return myLibrary.push(title,author, pages,read)
    // }
  }


function addBookToLibrary(title,author,pages,read){ // form inserted here?
  Book.prototype  =  Object.create(addBookToLibrary.prototype);
  const book= new Book(title,author,pages,read);
  
  //adds object to library
  myLibrary.push(book)
  console.log(myLibrary)


    const container = book_creation;

  const newBook= document.createElement('div');
  newBook.classList.add('newBook')
  container.appendChild(newBook)

  //Add Picture
  const newPicture = document.createElement('img');
  newPicture.classList.add('book-image')
  newPicture.src= 'images/book.png'
  newBook.appendChild(newPicture)


  //Add title
  const newTitle= document.createElement('div');
  newTitle.classList.add('newTitle')
  newTitle.textContent= title
  newBook.appendChild(newTitle)

  //Add Author
  const newAuthor= document.createElement('div');
  newAuthor.classList.add('newAuthor')
  newAuthor.textContent=  author
  newBook.appendChild(newAuthor)
  

}




console.log(myLibrary)
submit_button.addEventListener('click',()=>{
title = title_form.value;
author = author_form.value;
pages = pages_form.value;
read  = read_form.value;

addBookToLibrary(title,author,pages,read)
  event.preventDefault();
})