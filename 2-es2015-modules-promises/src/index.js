// # TODO:
// first import getFilmsIdList from lib/films.js file & use
// then import only one ajax film url const from lib/consts.js
// install & import axios


function getFilmById(id) {
    // TODO: send ajax and return promise with film data
}


function getFilms() {
    // TODO: return promise with all films data (from getFilmsIdList ids)
}


/***** Final example usage ****** /
getFilms().then((films) => {
    films.forEach((f) => {
        console.log(f.title);
    });
});
/******/

// TODO: Export getFilms
