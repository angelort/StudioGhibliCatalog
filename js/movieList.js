import {
    baseUrl,
    movieEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const movieSelect = document.querySelector('.movie');
let filmsLength;
let films;

export async function getMovies() {
    const res = await fetch(baseUrl + movieEndpoint);
    films = await checkAndParse(res);
    const titles = [];
    filmsLength = films.length;
    console.log(filmsLength)
    console.log(films);

    for (let i = 0; i < filmsLength; i+=1) {
        titles.push(films[i].title);
        console.log(titles);

        const movieTitle = document.createElement('option');
        movieTitle.value = films[i].title;
        movieTitle.classList.add('list_title');

        if (i !== filmsLength) {
            movieTitle.innerHTML = `${films[i].title}`;
          }

        movieSelect.appendChild(movieTitle);
    }
}

async function movieDetails (selectedItem) {
    const detailsSection = document.querySelector('.results');

    detailsSection.innerHTML = '';

    const Title = document.createElement('h3');
    const Description = document.createElement('p');
    const Director = document.createElement('p');
    const Producer = document.createElement('p');
    const Year = document.createElement('p');

    Title.innerHTML = selectedItem.title;
    Title.classList.add('title');
    Description.innerHTML = selectedItem.description;
    Description.classList.add('description');
    Director.innerHTML = selectedItem.director;
    Director.classList.add('director');
    Producer.innerHTML = selectedItem.producer;
    Producer.classList.add('producer');
    Year.innerHTML = selectedItem.release_date;
    Year.classList.add('date');

    detailsSection.appendChild(Title);
    detailsSection.appendChild(Description);
    detailsSection.appendChild(Director);
    detailsSection.appendChild(Producer);
    detailsSection.appendChild(Year);
} 

movieSelect.onchange = () => {
    for (let i = 0; i < filmsLength; i++) {
        if (films[i].title === movieSelect.value) {
            movieDetails(films[i]);
            return;
        }
    }
}