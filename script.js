// console.log(1);

// 9 //

// let number = 10;
// const leftBorderWidth = 5;

// number = 120;
// console.log(number);

// 

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

//

// console.log(name);
// var name = 'lev';

// {
//     var result = 50;
// }

// console.log(result);

//

// // тут говорилось про 'use strict'
// a = 15;
// console.log(a);

// 11 //

// let number = 10.1;

// console.log(4/0);
// console.log('string' * 89);

//
// Скобки
// const person = 'Kitty';
// const person = "Kitty";
// const person = `Kitty`;

// 
// Булиевые значения
// const bool = true;
// const bool = false;

//

//null & undefined
// console.log(something);

// let und;
// console.log(und);

//

//Объект
//Свойства объекта
// const obj = {
//     name: "Kitty",
//     age: 25,
//     isMarried: true
// };

// console.log(obj.name);
// console.log(obj["name"]);

//

// let arr = ['plum.png', 'or.jpeg', 6, 'apple.bmp', {}, []];
// console.log(arr[3]);

// 12 //

//Массив - сущность, в которой объекты имеют порядковые номера (порядок элементов)
// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr[10]);
// console.log(arr);

// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c',
//     abc: {
//         df: [{}, 'sdsd', [], 34],
//         bvc: {

//         }
//     }
// };

// const b = 'b';

// console.log(arr[1]);

// arrObj.b = '123';
// arrObj['b'] = '123';
// arrObj[b] = '123';

// console.log(arrObj['b']);
// console.log(arrObj.b);

// console.log(arrObj[1]);

//

//Объект - элемент, в котором объектам присваиваются свойства. Пара: ключ-значение
// const obj = {
//     Anna: 500,
//     'Alice': 800
// };

//Массив - частный случай объекта

// 13 //

// alert('hello');

// const result = confirm('are you here?');
// console.log(result);

//

// const answer = prompt('vam est 18?' , '18');
// console.log(typeof(answer));

//

// const answers = [];

// answers[0] = prompt('Ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// 14 //

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'lev';

// alert(`hello, ${user}`);

// 15 //

// console.log('arr' + ' - object');
// console.log(4 + ' - object');

let incr = 10,
    decr = 10;

// incr++;
// ++incr;
// decr--;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 === '8');
// console.log(2+ 2 * 2 === 8);
// console.log(2 + 2 * 2 != 8);

// && // - оператор И
// || // - оператор ИЛИ

// const isChecked = true,
//     isClose = false;

// console.log(isChecked && !isClose);

// 16 //

// Работа с Git и GitHub

// 17 //

// Работа с Git

// 18 //

// 19 //


// 1


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// 2


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// 3 


// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

//     console.log(personalMovieDB);


// 20 //


// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

//

// const num = 1000;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');


//

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default:
//         console.log('not found');
//         break;
// }


// 21 //


// const hamb = true;
// const fries = true;

// if (hamb && fries) {
//     console.log('good');
// } 

// console.log((hamb && fries));

// const hamb = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamb === 3 && cola && fries)

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dwedscsfd');

// if (hamb === 3 && cola === 1 && fries) {
//     console.log('we will stay here');
// } else {
//     console.log('we left');
// }


//


// const hamb = 3,
//     fries = 0,
//     cola = 0,
//     nuggets = 2;

// if (hamb === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('good');
// } else {
//     console.log('we left');
// }


//


// let johnReport, alexReport, samReport, maryReport = 'done';

// console.log(johnReport || alexReport || samReport || maryReport);


// 22 //

