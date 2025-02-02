const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const questionlastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "");
const questionfilmRewiew = +prompt("На сколько оцените его?", "");
const secondquestionlastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "");
const secondquestionfilmRewiew = +prompt("На сколько оцените его?", "");



personalMovieDB.movies[questionlastWatchedFilm] = questionfilmRewiew;
personalMovieDB.movies[secondquestionlastWatchedFilm] = secondquestionfilmRewiew;

console.log(personalMovieDB)