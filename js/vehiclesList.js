import {
    baseUrl,
    vehiclesEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const vehiclesSelect = document.querySelector('.vehicles');
let vehicles;
let vehiclesLength;

export async function getVehicles() {
    const res = await fetch(baseUrl + vehiclesEndpoint);
vehicles = await checkAndParse(res);
    const vehiclesNames = [];
    vehiclesLength = vehicles.length;
    console.log(vehiclesLength)
    console.log(vehicles);

    for (let i = 0; i < vehiclesLength; i += 1) {
        vehiclesNames.push(vehicles[i].name);
        console.log(vehiclesNames);

        const vehicleName = document.createElement('option');
        vehicleName.classList.add('list_option');

        if (i !== vehiclesLength) {
            vehicleName.innerHTML = `${vehicles[i].name}`;
        }

        vehiclesSelect.appendChild(vehicleName);
    }
}

async function vehiclesDetails (selectedItem) {

    const detailsSection = document.querySelector('.results');

    detailsSection.innerHTML = '';

    const Name = document.createElement('h3');
    const description = document.createElement('p');
    const vehicleClass = document.createElement('p');
    const vehicleLength = document.createElement('p');
    
    Name.innerHTML = selectedItem.name;
    Name.classList.add('name');
    description.innerHTML = selectedItem.description;
    description.classList.add('description');
    vehicleClass.innerHTML = selectedItem.vehicle_class;
    vehicleClass.classList.add('vehicle_class');
    vehicleLength.innerHTML = selectedItem.length;
    vehicleLength.classList.add('vehicle_length');
    
    detailsSection.appendChild(Name);
    detailsSection.appendChild(description);
    detailsSection.appendChild(vehicleClass);
    detailsSection.appendChild(vehicleLength);

} 

vehiclesSelect.onchange = () => {
    for (let i = 0; i < vehiclesLength; i++) {
        if (vehicles[i].name === vehiclesSelect.value) {
            vehiclesDetails(vehicles[i]);
            sessionStorage.setItem("vehicle", vehiclesSelect.value);
            console.log(sessionStorage.getItem("vehicle"));
            return;
        }
    }
}