const fontSize = Array.from(document.getElementsByClassName('font-size')); // навигационный массив по шрифту
const book = document.querySelector('.book__content'); // доступ к тексту

const color = document.querySelector('.book__control_color'); // цвет шрифта
const colorChild = Array.from(color.children); // массив из детей color
let fontColor = []; // инициализация массива c цветами шрифта
colorChild.forEach((elem) => {
    if (elem.classList.contains('color')){
        return fontColor.push(elem); // push елементов в массив fontColor
    };   
});

const bgColor = document.querySelector('.book__control_background'); // доступ к цвету bg
const bgColorChild = Array.from(bgColor.children); // массив из детей bgColor
let blockBg = []; // инициализация массива c цветами bg 
bgColorChild.forEach((elem) => {
    if (elem.classList.contains('color')){
        return blockBg.push(elem); // push елементов в массив blockBg
    };   
});


function fontChange(evt) {
    fontSize.forEach((elem) => elem.classList.remove('font-size_active')); // итерация для удаления активного шрифта 
    this.classList.add('font-size_active'); // добавление активного шрифта
    book.classList.remove('book_fs-small', 'book_fs-big', 'book_color-black'); // удаление размера шрифта присвоенного ранее
    if(this.classList.contains('font-size_small')) { // если активная иконка содержит класс small
        evt.preventDefault();
        book.classList.add('book_fs-small'); // тогда применить к тексту маленький шрифт
    } else if (this.classList.contains('font-size_big')) { // если активная иконка содержит класс big
        evt.preventDefault();
        book.classList.add('book_fs-big'); // тогда применить к тексту большой шрифт
    } else {
        evt.preventDefault();
        // book.classList.add('font-size_active'); // тогда применить к тексту обычный шрифт
    } 
}
fontSize.forEach((button) => button.addEventListener('click', fontChange)); // обработчик события клика при выборе шрифта


function fontColorChange(evt) {
    fontColor.forEach((elem) => elem.classList.remove('color_active')); // итерация для удаления активного цвета
    this.classList.add('color_active'); // добавление активного цвета
    book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black'); // удаление цвета шрифта присвоенного ранее
    if(this.classList.contains('text_color_gray')) { // если активная иконка содержит класс text_color_gray
        evt.preventDefault();
        book.classList.add('book_color-gray') // тогда добавить серый цвет шрифта
    } else if (this.classList.contains('text_color_whitesmoke')) { // если активная иконка содержит класс text_color_whitesmoke
        evt.preventDefault();
        book.classList.add('book_color-whitesmoke') // тогда добавить белый цвет шрифта
    } else {
        evt.preventDefault();
        book.classList.add('book_color-black'); // тогда применить к тексту черный шрифт
    }
}
fontColor.forEach((elem) => elem.addEventListener('click', fontColorChange)); // обработчик события клика при выборе цвета шрифта

function bgColorchange(evt) {
    blockBg.forEach((elem) => elem.classList.remove('color_active')); // итерация для удаления активного цвета
    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white'); // удаление цвета фона присвоенного ранее
    this.classList.add('color_active');
    if(this.classList.contains('bg_color_black')) { // если активная иконка содержит класс bg_color_black
        evt.preventDefault();
        book.classList.add('book_bg-black') // тогда цвет фона сменить на черный
    } else if (this.classList.contains('bg_color_gray')) { // если активная иконка содержит класс bg_color_gray
        evt.preventDefault();
        book.classList.add('book_bg-gray') // тогда цвет фона сменить на черный
    } else {
        evt.preventDefault();
        book.classList.add('book_bg-white'); // тогда цвет фона сменить на белый
    }
}
blockBg.forEach((elem) => elem.addEventListener('click', bgColorchange)); // обработчик события клика при выборе цвета фона