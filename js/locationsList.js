import {
    baseUrl,
    locationsEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const resultsSection = document.querySelector('.locations');
async function getLocations() {
    const res = await fetch(baseUrl + locationsEndpoint);
    const locations = await checkAndParse(res);
    const locationsNames = [];
    const locationsLength = locations.length;
    console.log(locationsLength)
    console.log(locations);

    for (let i = 0; i < locationsLength; i += 1) {
        locationsNames.push(locations[i].name);
        console.log(locationsNames);

        const locationName = document.createElement('option');
        locationName.classList.add('list_title');

        if (i !== locationsLength) {
            locationName.innerHTML = `${locations[i].name}`;
        }

        resultsSection.appendChild(locationName);
    }
}

getLocations();
