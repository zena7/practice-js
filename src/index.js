'use strict'

const  personalMovieDB = {
  'count': 0,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
  start: () => {
    this.count =  +prompt('Сколько фильмов вы  уже посмотрели?', '');  
  
    while (this.count == null || this.count == '' || isNaN(this.count)) {
      this.count =  +prompt('Сколько фильмов вы  уже посмотрели?', ''); 
    };
  },
  rememberMyFilms() {
   for (let  i = 0; i < 2; i++) {
      let a = prompt('Один из последних просмотренных фильмов?', ''),
      b = Number(prompt('На сколько оцените его?', ''));
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        this.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }; 
   }; 
  },
  detectPersonalLevel() {
   if (this.count < 10) {
      alert('Просмотрено довольно мало фильмов');
      } else if (this.count >= 10 && this.count <= 30) {
      alert('Вы классический зритель!');
      } else if (this.count > 30) {
      alert('Вы киноман')
      } else {
      alert('Произошла ошибка')
      };
  },
  showMyBD: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    };
  },
  toggleVisibleMyDB: function() {
    if (this.privat) {
       this.privat = false;
    } else { 
      this.privat = true;
    };
  },
  writeYourGenres: function () {
    let genre;

    for (let i  = 1; i <= 3; i++) {
     do { genre =  prompt(`Ваш любимый жанр под номером ${i}`, '');
        this.genres[i-1] = genre;
      } while (genre == null || genre === '');
     };
    personalMovieDB.genres.forEach((item, i)  => {console.log(`Любимый жанр ${i + 1} - это ${item}`)});
  },
 
};

personalMovieDB.writeYourGenres();

//Function CALLBACK
// function lernJS(lang, callback) {
//   console.log(`I learn ${lang}`);
//   callback();
// };

// function done()  {
//   console.log('Я прошел этот урок');
// };

// lernJS('JavaScript', done);