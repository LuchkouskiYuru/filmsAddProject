let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  


function writeYourGenres() {
    for(let i = 1; i <= 3; i++) { 
        const a = prompt(`Ваш любимый жанр под номером ${i}`, "" );
        personalMovieDB.genres[i - 1] = a;
    }
}
writeYourGenres()

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = +prompt("На сколько оцените его?", "");
        if (a != null && b != null && a !='' && b !='' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('Done')
        } else {
            console.log('error')
            i--;
        } 
    
    }
}
rememberMyFilms()



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count > 50) {
        console.log("Вы киноман")
    } else {console.log("Произошла ошибка")}
}
detectPersonalLevel()
 
function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)


