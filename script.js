
let myLibrary = [];
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
    this.info = function(){
      return(title + ' by ' + author+', ' + pages+', '+read)
    }
  }

function addBookToLibrary(title,author,pages,read){
myLibrary.push(title,author,pages,read)
console.log(myLibrary)
}

  
  const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien','295 pages','not read yet')
  console.log(theHobbit.info())

  book_creation.addEventListener('click',()=>{
    addBookToLibrary('This is a book','Ryan Briosos','300 pages', 'not read yet')
  })