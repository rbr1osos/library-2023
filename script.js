// read button will toggle, figure a way to do that
// - change read-button to notRead-button using text override?


let myLibrary = [];

const title_form = document.getElementById('title');
const author_form = document.getElementById('author');
const pages_form = document.getElementById('pages');
const read_form = document.getElementById('checkboxed');


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
  popup_div.style.display = "none";
  book_popup.style.display = "none";

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

function addBookToLibrary(){
  Book.prototype  =  Object.create(addBookToLibrary.prototype);
  const book= new Book(title,author,pages,read);
  
  //adds object to library
  myLibrary.push(book)
  console.log(myLibrary)
  
  console.log(typeof myLibrary)

  for (let i in myLibrary){
    console.log('hi')
  }
 
}

function addBookToLibrary(title,author,pages,read){ // form inserted here?

  Book.prototype  =  Object.create(addBookToLibrary.prototype);
  const book= new Book(title,author,pages,read);
  
  //adds object to library
  myLibrary.push(book)

  const container = book_creation;
  const newBook= document.createElement('div');
  newBook.classList.add('book')
  container.appendChild(newBook)
  newBook.addEventListener('click', function(){
    book_popup.style.display = "block";
  })

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
  newPages.textContent= pages
  newBook.appendChild(newPages)

  const button_container = document.createElement('div');
  button_container.classList.add('book-buttons')
  newBook.appendChild(button_container)

  if (read==='read'){
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



submit_button.addEventListener('click',(e)=>{
title = title_form.value;
author = author_form.value;
pages = pages_form.value;

if(read_form.checked){
read = read_form.value;
console.log(read)

}

else{
  console.log('hi')
  read='not read'
}

addBookToLibrary(title,author,pages,read)
  e.preventDefault();
});

//Closes window when background is clicked
black_popup.addEventListener('click',()=>{
  closeForm()
})


book_div.addEventListener('click',()=>{
  book_popup.style.display = "block";

})