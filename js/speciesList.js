import {
    baseUrl,
    speciesEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const speciesSelect = document.querySelector('.species');
let species;
let speciesLength;

export async function getSpecies() {
    const res = await fetch(baseUrl + speciesEndpoint);
    species = await checkAndParse(res);
    const speciesNames = [];
    speciesLength = species.length;
    console.log(speciesLength)
    console.log(species);

    for (let i = 0; i < speciesLength; i += 1) {
        speciesNames.push(species[i].name);
        console.log(speciesNames);

        const specieName = document.createElement('option');
        specieName.classList.add('list_option');

        if (i !== speciesLength) {
            specieName.innerHTML = `${species[i].name}`;
        }

        speciesSelect.appendChild(specieName);
    }
}

async function speciesDetails (selectedItem) {

    const detailsSection = document.querySelector('.results');

    detailsSection.innerHTML = '';

    const Name = document.createElement('h3');
    const classification = document.createElement('p');
    const eyeColor = document.createElement('p');
    const hairColor = document.createElement('p');

/*     const films = document.createElement('p');
    const species = document.createElement('p'); */

    Name.innerHTML = selectedItem.name;
    Name.classList.add('name');
    classification.innerHTML = selectedItem.classification;
    classification.classList.add('classification');
    eyeColor.innerHTML = selectedItem.eye_colors;
    eyeColor.classList.add('eye_color');
    hairColor.innerHTML = selectedItem.hair_colors;
    hairColor.classList.add('hair');

    // Para obtener la información se debe volver a hacer 'fetch' al endpoint enviado, lo cual devuelve un nuevo arreglo, se deja pendiente por falta de tiempo
    /* films.innerHTML = selectedItem.films;
    films.classList.add('films');
    species.innerHTML = selectedItem.species;
    species.classList.add('species'); */

    detailsSection.appendChild(Name);
    detailsSection.appendChild(classification);
    detailsSection.appendChild(eyeColor);
    detailsSection.appendChild(hairColor);

// No se agregan las opciones
    /* detailsSection.appendChild(films);
    detailsSection.appendChild(species); */
} 

speciesSelect.onchange = () => {
    for (let i = 0; i < speciesLength; i++) {
        if (species[i].name === speciesSelect.value) {
            speciesDetails(species[i]);
            sessionStorage.setItem("specie", speciesSelect.value);
            console.log(sessionStorage.getItem("specie"));
            return;
        }
    }
}
