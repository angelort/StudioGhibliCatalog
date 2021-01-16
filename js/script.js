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
})

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

form.addEventListener('reset', () => {
    const detailsSection = document.querySelector('.results');
    detailsSection.innerHTML = '';
})