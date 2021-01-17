import {
    baseUrl,
    locationsEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const locationsSelect = document.querySelector('.locations');
let locations;
let locationsLength;

export async function getLocations() {
    const res = await fetch(baseUrl + locationsEndpoint);
    locations = await checkAndParse(res);
    const locationsNames = [];
    locationsLength = locations.length;
    console.log(locationsLength)
    console.log(locations);

    for (let i = 0; i < locationsLength; i += 1) {
        locationsNames.push(locations[i].name);
        console.log(locationsNames);

        const locationName = document.createElement('option');
        locationName.classList.add('list_option');

        if (i !== locationsLength) {
            locationName.innerHTML = `${locations[i].name}`;
        }

        locationsSelect.appendChild(locationName);
    }
}

async function locationsDetails(selectedItem) {

    const detailsSection = document.querySelector('.results');

    detailsSection.innerHTML = '';

    const Name = document.createElement('h3');
    const climate = document.createElement('p');
    const terrain = document.createElement('p');
    const surfaceWater = document.createElement('p');

    /* const residents = document.createElement('p');
     const films = document.createElement('p'); */

    Name.innerHTML = selectedItem.name;
    Name.classList.add('name');
    climate.innerHTML = selectedItem.climate;
    climate.classList.add('climate');
    terrain.innerHTML = selectedItem.terrain;
    terrain.classList.add('terrain');
    surfaceWater.innerHTML = selectedItem.surface_water;
    surfaceWater.classList.add('surface_water');

    // Para obtener la información se debe volver a hacer 'fetch' al endpoint enviado, lo cual devuelve un nuevo arreglo, se deja pendiente por falta de tiempo
    /*residents.innerHTML = selectedItem.residents;
    residents.classList.add('residents');
    films.innerHTML = selectedItem.films;
    films.classList.add('films'); */

    detailsSection.appendChild(Name);
    detailsSection.appendChild(climate);
    detailsSection.appendChild(terrain);
    detailsSection.appendChild(surfaceWater);

    // No se agregan las opciones
    /* detailsSection.appendChild(residents); 
         detailsSection.appendChild(films); */
}

locationsSelect.onchange = () => {
    for (let i = 0; i < locationsLength; i++) {
        if (locations[i].name === locationsSelect.value) {
            locationsDetails(locations[i]);
            sessionStorage.setItem("location", locationsSelect.value);
            console.log(sessionStorage.getItem("location"));
            return;
        }
    }
}
