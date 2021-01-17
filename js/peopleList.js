import {
    baseUrl,
    peopleEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const peopleSelect = document.querySelector('.people');
let people;
let namesLength;

export async function getPeople() {
    const res = await fetch(baseUrl + peopleEndpoint);
    people = await checkAndParse(res);
    const names = [];
    namesLength = people.length;
    console.log(namesLength)
    console.log(people);

    for (let i = 0; i < namesLength; i += 1) {
        names.push(people[i].name);
        console.log(names);

        const peopleName = document.createElement('option');
        peopleName.classList.add('list_option');

        if (i !== namesLength) {
            peopleName.innerHTML = `${people[i].name}`;
        }

        peopleSelect.appendChild(peopleName);
    }
}

async function peopleDetails (selectedItem) {

    const detailsSection = document.querySelector('.results');

    detailsSection.innerHTML = '';

    const Name = document.createElement('h3');
    const Gender = document.createElement('p');
    const Age = document.createElement('p');
    const eyeColor = document.createElement('p');
    const hairColor = document.createElement('p');

/*     const films = document.createElement('p');
    const species = document.createElement('p'); */

    Name.innerHTML = selectedItem.name;
    Name.classList.add('name');
    Gender.innerHTML = selectedItem.gender;
    Gender.classList.add('gender');
    Age.innerHTML = selectedItem.age;
    Age.classList.add('age');
    eyeColor.innerHTML = selectedItem.eye_color;
    eyeColor.classList.add('eye_color');
    hairColor.innerHTML = selectedItem.hair_color;
    hairColor.classList.add('hair');

    // Para obtener la información se debe volver a hacer 'fetch' al endpoint enviado, lo cual devuelve un nuevo arreglo, se deja pendiente por falta de tiempo
    /* films.innerHTML = selectedItem.films;
    films.classList.add('films');
    species.innerHTML = selectedItem.species;
    species.classList.add('species'); */

    detailsSection.appendChild(Name);
    detailsSection.appendChild(Gender);
    detailsSection.appendChild(Age);
    detailsSection.appendChild(eyeColor);
    detailsSection.appendChild(hairColor);

// No se agregan las opciones
    /* detailsSection.appendChild(films);
    detailsSection.appendChild(species); */
} 

peopleSelect.onchange = () => {
    for (let i = 0; i < namesLength; i++) {
        if (people[i].name === peopleSelect.value) {
            peopleDetails(people[i]);
            sessionStorage.setItem("character", peopleSelect.value);
            console.log(sessionStorage.getItem("character"));
            return;
        }
    }
}
