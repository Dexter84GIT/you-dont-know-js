const allBooks = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let library = document.querySelector('body');
let fuckingAdvertisement = document.querySelector('.adv');
let booksLink = document.querySelectorAll('.book h2 a');
let booksList = document.querySelectorAll('.book ul li')
let forgottenChapter = document.createElement('li')

book[1].after(book[0])
book[4].after(book[3])
book[5].after(book[2])

library.style.backgroundImage = ('url(./image/you-dont-know-js.jpg)')

fuckingAdvertisement.remove()

booksLink[4].textContent = 'Книга 3. this и Прототипы Объектов'

booksList[3].after(booksList[6])
booksList[4].before(booksList[8])
booksList[9].after(booksList[2])

booksList[48].before(booksList[55])
booksList[48].before(booksList[49])
booksList[48].before(booksList[50])
booksList[54].before(booksList[51])

forgottenChapter.textContent = 'Глава 8: За пределами ES6'
booksList[26].before(forgottenChapter)


