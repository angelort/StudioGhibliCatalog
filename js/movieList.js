import {
    baseUrl,
    movieEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const resultsSection = document.querySelector('.movie');
async function getMovies() {
    const res = await fetch(baseUrl + movieEndpoint);
    const films = await checkAndParse(res);
    const titles = [];
    const filmsLength = films.length;
    console.log(filmsLength)
    console.log(films);

    for (let i = 0; i < filmsLength; i+=1) {
        titles.push(films[i].title);
        console.log(titles);

        const movieTitle = document.createElement('option');
        movieTitle.classList.add('list_title');

        if (i !== filmsLength) {
            movieTitle.innerHTML = `${films[i].title}`;
          }

        resultsSection.appendChild(movieTitle);
    }
}

getMovies();
