//! 44 interaction with the document page

//todo Задания на урок:
//todo 1) Удалить все рекламные блоки со страницы (правая часть сайта)
//todo 2) Изменить жанр фильма, поменять "комедия" на "драма"
//todo 3) Изменить задний фон с постером фильма на изображение "bg.jpg". Оно лежит в папке img.
//todo Реализовать только при помощи JS
//todo 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//todo Отсортировать их по алфавиту 
//todo 5) Добавить нумерацию выведенных фильмов

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAds = document.querySelectorAll('.promo__adv img'),
      posterBG = document.querySelector('.promo__bg'),
      promoGenre = posterBG.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

promoAds.forEach(item => {
    item.remove();
});

// promoAds.forEach(function (item){
//     item.remove();
// });

//todo task # 2
promoGenre.textContent = 'драма';

//todo task # 3 bg img change
posterBG.style.backgroundImage = 'url("img/bg.jpg")';

//todo task # 4 change movie titles with js file data sort it first
movieList.innerHTML = "";

movieDB.movies.sort();

// console.log(posterBG.innerHTML);

//todo Task #5 add number of films i
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>                    
    `;
});