const numberOfFilms =  Number(prompt('Сколько фильмов вы  уже посмотрели?', ''));

const  personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
};

let a = prompt('Один из последних просмотренных фильмов?', '');
let b = Number(prompt('На сколько оцените его?', ''));
let c = prompt('Один из последних просмотренных фильмов?', '');
let d = Number(prompt('На сколько оцените его?', ''));

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

