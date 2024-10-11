'use strict'

const allBooks = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const library = document.querySelector('body');
const fuckingAdvertisement = document.querySelector('.adv');
const booksLink = document.querySelectorAll('.book h2 a');
const booksList = document.querySelectorAll('.book ul li')
const forgottenChapter = document.createElement('li')

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


