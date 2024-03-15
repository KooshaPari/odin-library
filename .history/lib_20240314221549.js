const myLibrary = []
render()
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}
const page = document.getElementById('body')
const bookList = document.getElementById('book-list')
const bookForm = document.getElementById('bookForm')
bookForm.addEventListener('submit', genBook)
/* CREATE PREMADE CARD GENERIC THAT IS CLONE & MODIFIED WITH GIVEN INFORMATION */
function render() {
  for (let book of myLibrary) {
    bookList.appendChild(createBookCard(book))
  }
}
const addBook = document.getElementById('add-book')
addBook.addEventListener('click', () => bookAddHandler())

function bookAddHandler() {
  bookForm.classList.toggle('isVisible')
  console.log('TOGGLE: ', bookForm.classList)
}
function genBook(event) {
  event.preventDefault() // Prevent the default form submission behavior

  // Access form data
  const formData = new FormData(event.target)
  let curBook = Book(
    formData.get('bookName'),
    formData.get('bookAuthor'),
    formData.get('bookPages'),
    formData.get('bookRead')
  )
  bookAddHandler()
  addBookToLibrary(curBook)
  render()
}
function createBookCard() {
  const card = document.createElement('li')
  card.classList.add('cardItem')
}
