// console.log(1);


///// 9 /////


// let number = 10;
// const leftBorderWidth = 5;

// number = 120;
// console.log(number);


////////// 


// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);


//////////


// console.log(name);
// var name = 'lev';

// {
//     var result = 50;
// }

// console.log(result);


//////////


// // тут говорилось про 'use strict'
// a = 15;
// console.log(a);


///// 11 /////


// let number = 10.1;

// console.log(4/0);
// console.log('string' * 89);


//////////


// Скобки
// const person = 'Kitty';
// const person = "Kitty";
// const person = `Kitty`;


//////////


// Булиевые значения
// const bool = true;
// const bool = false;


//////////


//null & undefined
// console.log(something);

// let und;
// console.log(und);


//////////


//Объект
//Свойства объекта
// const obj = {
//     name: "Kitty",
//     age: 25,
//     isMarried: true
// };

// console.log(obj.name);
// console.log(obj["name"]);


//////////


// let arr = ['plum.png', 'or.jpeg', 6, 'apple.bmp', {}, []];
// console.log(arr[3]);


///// 12 /////


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


//////////


//Объект - элемент, в котором объектам присваиваются свойства. Пара: ключ-значение
// const obj = {
//     Anna: 500,
//     'Alice': 800
// };

//Массив - частный случай объекта


///// 13 /////


// alert('hello');

// const result = confirm('are you here?');
// console.log(result);


//////////


// const answer = prompt('vam est 18?' , '18');
// console.log(typeof(answer));


//////////


// const answers = [];

// answers[0] = prompt('Ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));


///// 14 /////


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'lev';

// alert(`hello, ${user}`);


///// 15 /////


// console.log('arr' + ' - object');
// console.log(4 + ' - object');

// let incr = 10,
// decr = 10;

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


///// 16 /////


// Работа с Git и GitHub


///// 17 /////


// Работа с Git


///// 18 /////


///// 19 ///// PRACTICE /////


////////// 1


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


////////// 2


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


////////// 3


// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

//     console.log(personalMovieDB);


///// 20 /////


// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error');
// }


//////////


// const num = 1000;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');


//////////


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


///// 21 /////


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


//////////


// const hamb = 3,
//     fries = 0,
//     cola = 0,
//     nuggets = 2;

// if (hamb === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('good');
// } else {
//     console.log('we left');
// }


//////////


// let johnReport, alexReport, samReport, maryReport = 'done';

// console.log(johnReport || alexReport || samReport || maryReport);


///// 22 /////


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


//////////


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


//////////


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }


//////////


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


///// 23 /////


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


//////////


// *
// **
// ***
// ****
// *****
// ******


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);


//////////


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


///// 24 ///// PRACTICE /////


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

//     personalMovieDB.movies[a] = b;
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно много фильмов');   
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Проищошла ошибка');
// }

// console.log(personalMovieDB);


///// 25 /////


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     // let num = 40;
//     console.log(num);
// }

// showFirstMessage('hello wrld');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 10));
// console.log(calc(3, 2));
// console.log(calc(5, 5));


//////////


// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('hello');
// };

// logger();


//////////


// const calc = (a, b) => { return a + b };
// const calc = (a, b) => a + b;


///// 26 /////


// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);


///// 27 /////


// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500 , usdCurr);
// promotion(res);


//////////


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('done');
// }

// test();


//////////


// function doNothing() {};
// console.log(doNothing() === undefined);


///// 28 /////


// const str = "test",
//     arr = [1, 2, 3];

// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);


//////////


// const str = 'test';

// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));


/////


// const logg = 'hello wrld';

// console.log(logg.slice(3, 5));


/////


// console.log(logg.substring(7, 2))


/////


// console.log(logg.substr(6, 3));


/////


// const num = 12.2;

// console.log(Math.round(num));


/////


// const test = '12.2px';

// console.log(parseInt(test));

// console.log(parseFloat(test));


///// 29 /////


