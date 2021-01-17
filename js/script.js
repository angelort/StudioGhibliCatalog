import {
    getMovies,
} from './movieList.js';

import {
    getPeople,
} from './peopleList.js';

import {
    getLocations,
} from './locationsList.js';

import {
    getSpecies,
} from './speciesList.js';

import {
    getVehicles,
} from './vehiclesList.js';

document.addEventListener('DOMContentLoaded', () => {
    getMovies();
    getPeople();
    getLocations();
    getSpecies();
    getVehicles();
});

const form = document.getElementById('form');
const info = document.getElementById('info');

form.addEventListener('reset', () => {
    const detailsSection = document.querySelector('.results');
    detailsSection.innerHTML = '';
    info.innerHTML = '';
    const all = ["movie", "character", "location", "specie", "vehicle"];

    for (let i = 0; i < all.length; i++) {
        sessionStorage.removeItem(all[i]);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Los resultados de tu búsqueda se encuentran al final de la página");
    const all = ["movie", "character", "location", "specie", "vehicle"];
    info.innerHTML = '';
    let items;
    for (let i = 0; i < all.length; i++) {
        items = sessionStorage.getItem(all[i]);
        console.log(items);

        const searchResults = document.createElement('li');
        searchResults.classList.add('title');

        if (i !== all.length) {
            searchResults.innerHTML = `${items}`;
        }

        info.appendChild(searchResults);
    }
    if (items === null) {
        alert("Aún no has completado tu búsqueda");
        info.innerHTML = '';
    }
});
