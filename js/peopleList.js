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
        peopleName.classList.add('list_title');

        if (i !== namesLength) {
            peopleName.innerHTML = `${people[i].name}`;
        }

        peopleSelect.appendChild(peopleName);
    }
}
