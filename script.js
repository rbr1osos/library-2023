//display of read/not read--changes, array doesnt
//need to find a way to change the actual object property

let myLibrary = [];

const title_form = document.getElementById('title');
const author_form = document.getElementById('author');
const pages_form = document.getElementById('pages');
const read_form = document.getElementById('checkboxed');

const read_button =document.querySelector('.read-button')
const notRead_button =document.querySelector('.notRead-button')

const black_popup = document.querySelector('.pop-up-background')
const submit_button = document.querySelector('.submit-button')
const book_creation =  document.querySelector('.item-container')
const popup_div = document.querySelector('.pop-up-container')
const book_popup = document.querySelector('.book-pop-up-container')
const book_div = document.querySelector('.book')

// const read_choice = document.querySelector('input[name="picked"]:checked')?.value;

function openForm() {
  popup_div.style.display = "block";

}

function closeForm() {
  if(title_form.value==='none'){
    return false
  }
  else{
  popup_div.style.display = "none";
  }
}

function Book(title,author,pages,read){
  this.title=title
  this.author=author
  this.pages = pages
  this.read=read
  this.info = function (){
    
  return myLibrary.push(title,author, pages,read)
  }
}


function addBookToLibrary(title,author,pages,read) {
Book.prototype = Object.create(addBookToLibrary.prototype);
const book= new Book(title,author,pages,read);  
book.info()
console.log('this is the library '+myLibrary)

const container = book_creation;
const newBook= document.createElement('div');
newBook.classList.add('book')
container.appendChild(newBook)


const newTitle= document.createElement('div');
newTitle.classList.add('book-title')
newTitle.textContent= title
newBook.appendChild(newTitle)

const newAuthor= document.createElement('div');
newAuthor.classList.add('newAuthor')
newAuthor.textContent=  author
newBook.appendChild(newAuthor)

const newPages= document.createElement('p');
newPages.classList.add('book-pages')
newPages.textContent= pages+' pages'
newBook.appendChild(newPages)

const button_container = document.createElement('div');
button_container.classList.add('book-buttons')
newBook.appendChild(button_container)

if (read===true){
  const readButton = document.createElement('button')
  readButton.classList.add('read-button')
  readButton.textContent='Read'
  button_container.appendChild(readButton)
}

else{
  const notReadButton = document.createElement('button')
  notReadButton.classList.add('notRead-button')
  notReadButton.textContent='Not read'
  button_container.appendChild(notReadButton)
}
  
const removeButton = document.createElement('button')
removeButton.classList.add('remove-button')
removeButton.textContent='Remove'
button_container.appendChild(removeButton)

}

for(let elem in myLibrary){
console.log(elem,myLibrary[elem])
}

submit_button.addEventListener('click',(e)=>{
title= title_form.value
author= author_form.value
pages= pages_form.value
if (read_form.checked===true){
  read= true
}
else{
  read = false
}
console.log(myLibrary)
addBookToLibrary(title,author,pages,read);
e.preventDefault();
closeForm()
});


//Closes window when background is clicked
black_popup.addEventListener('click',()=>{
  closeForm()
})


read_button.addEventListener('click',()=>{
  changebutton();
})


function changebutton(){
  read = read_form.value;

console.log(read)
// read_button.classList.toggle('notRead-button')

//  if ((read_button.textContent)==='Read'){
//    read_button.textContent='Not Read'
//  }
//  else{
//    read_button.textContent='Read'

//  }
}
