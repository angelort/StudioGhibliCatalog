import {
    baseUrl,
    vehiclesEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const resultsSection = document.querySelector('.vehicles');
async function getVehicles() {
    const res = await fetch(baseUrl + vehiclesEndpoint);
    const vehicles = await checkAndParse(res);
    const vehiclesNames = [];
    const vehiclesLength = vehicles.length;
    console.log(vehiclesLength)
    console.log(vehicles);

    for (let i = 0; i < vehiclesLength; i += 1) {
        vehiclesNames.push(vehicles[i].name);
        console.log(vehiclesNames);

        const vehicleName = document.createElement('option');
        vehicleName.classList.add('list_title');

        if (i !== vehiclesLength) {
            vehicleName.innerHTML = `${vehicles[i].name}`;
        }

        resultsSection.appendChild(vehicleName);
    }
}

getVehicles();
