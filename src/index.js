'use strict'

const numberOfFilms =  Number(prompt('Сколько фильмов вы  уже посмотрели?', ''));

const  personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
};

let a = prompt('Один из последних просмотренных фильмов?', '');

while ( a === null || a.length === 0 || a.length > 50 ) {
  a = prompt('Один из последних просмотренных фильмов?', '');
};

// let c = prompt('Один из последних просмотренных фильмов?', '');
// let d = Number(prompt('На сколько оцените его?', ''));

let b = Number(prompt('На сколько оцените его?', ''));
console.log(b)
while ( b === 0 || b.length === 1 ) {
  b = Number(prompt('На сколько оцените его?', ''));
};
console.log(b);


personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель!');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман')
} else {
  alert('Произошла ошибка')
};