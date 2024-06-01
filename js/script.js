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

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const promoAds = document.querySelectorAll('.promo__adv img'),
//       posterBG = document.querySelector('.promo__bg'),
//       promoGenre = posterBG.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list');

// promoAds.forEach(item => {
//     item.remove();
// });

// // promoAds.forEach(function (item){
// //     item.remove();
// // });

// //todo task # 2
// promoGenre.textContent = 'драма';

// //todo task # 3 bg img change
// posterBG.style.backgroundImage = 'url("img/bg.jpg")';

// //todo task # 4 change movie titles with js file data sort it first
// movieList.innerHTML = "";

// movieDB.movies.sort();

// // console.log(posterBG.innerHTML);

// //todo Task #5 add number of films i
// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//     <li class="promo__interactive-item"> ${i + 1} ${film}
//         <div class="delete"></div>
//     </li>                    
//     `;
// });


//! Practical # 48 Use of events on the page
//todo Задания на урок:
//todo 1) Реализовать функционал, что после заполнения формы и нажатия кнопки
//todo "Подтвердить" - новый фильм добавляется в список. Страница не должна
//todo перезагружаться. Новый фильм должен добавляться в movieDB.movies.
//todo Для получения доступа к значению input - обращаемся к нему как input.value;
//todo P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий
//todo 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
//todo 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
//todo 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
//todo "Добавляем любимый фильм"
//todo 5) Фильмы должны быть отсортированы по алфавиту

// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
    
//     const promoAds = document.querySelectorAll('.promo__adv img'),
//           posterBG = document.querySelector('.promo__bg'),
//           promoGenre = posterBG.querySelector('.promo__genre'),
//           movieList = document.querySelector('.promo__interactive-list'),
//           addForm = document.querySelector('form.add'),
//           addInput = document.querySelector('.adding__input'),
//           checkbox = document.querySelector('[type="checkbox"]');

//     addForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         let newFilm = addInput.value;
//         const favorite = checkbox.checked;

//         if (newFilm) {

//             if (newFilm.length > 21) {
//                 newFilm = `${newFilm.substring(0, 22)}...`;
//             }

//             if (favorite) {
//                 console.log("Добавляем любимый фильм"); 
//             }
//             movieDB.movies.push(newFilm);
//             sortArr(movieDB.movies);
    
//             creatMovieList(movieDB.movies, movieList);
//         }

//         event.target.reset();
//     });
    
//     //! function for delete ads
//     const deleteAds = (arr) => {
//         arr.forEach(item => {
//             item.remove();
//         });
//     };
    
//     //! function for makeing some changes
//     const makeChanges = () => {
//         promoGenre.textContent = 'драма';

//         posterBG.style.backgroundImage = 'url("img/bg.jpg")';
//     };

//     //! function to sort the array
//     const sortArr = (arr) => {
//         arr.sort();
//     };

//     //! fucntion to create new list of films with button delete and numbers
//     function creatMovieList(films, parent) {
//         parent.innerHTML = "";
//         sortArr(movieDB.movies);       
    
//         films.forEach((film, i) => {
//             parent.innerHTML += `
//             <li class="promo__interactive-item"> ${i + 1} ${film}
//             <div class="delete"></div>
//             </li>
//             `;
//         });

//         //! delete the film form list
//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove();
//                 movieDB.movies.splice(i, 1);
//                 //!recoursion to change numbers as well
//                 creatMovieList(films, parent);
//             });
//         });
//     }

//     deleteAds(promoAds);
//     makeChanges();

//     creatMovieList(movieDB.movies, movieList);
// });