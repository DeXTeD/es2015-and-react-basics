import getFilmsIdList from './lib/films';
import {FILM_URL} from './lib/consts';
import axios from 'axios';



// 1. How to use Promises //////////////////////////////////

getFilmsIdList().then((ids) => {
    console.log(ids);
});



// 2. Write Promise ////////////////////////////////////////

function getFilmByIdNewPromise(id) {
    return new Promise((resolve, reject) => {

        axios.get(FILM_URL + id).then((response) => {
            resolve(response.data);
        });

    });
}

getFilmByIdNewPromise(1)
    .then((film) => {
        console.log(film.title);
    });



// 3. KISS - Axios get is Promise //////////////////////////

function getFilmById(id) {
    return axios.get(FILM_URL + id)
        .then((response) => {
            return response.data;
        })
}

getFilmById(1)
    .then((film) => {
        console.log(film.title);
    });



// 4. Promise.all //////////////////////////////////////////

Promise
    .all([getFilmById(1), getFilmById(2)])
    .then((aaaa) => {
        console.log('all 1: ', aaaa[0].title);
        console.log('all 2: ', aaaa[1].title);
    });



// 5. Final ////////////////////////////////////////////////

function getFilms() {
    return getFilmsIdList()
        .then((ids) => {
            return Promise.all(
                ids.map((id) => getFilmById(id))
            )
        });
}

getFilms().then((films) => {
    films.forEach((f) => {
        console.log(`Final result: ${f.title}`);
    });
});
