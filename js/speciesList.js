import {
    baseUrl,
    speciesEndpoint,
    checkAndParse,
} from './APIinteraction.js';

const speciesSelect = document.querySelector('.species');
export async function getSpecies() {
    const res = await fetch(baseUrl + speciesEndpoint);
    const species = await checkAndParse(res);
    const speciesNames = [];
    const speciesLength = species.length;
    console.log(speciesLength)
    console.log(species);

    for (let i = 0; i < speciesLength; i += 1) {
        speciesNames.push(species[i].name);
        console.log(speciesNames);

        const specieName = document.createElement('option');
        specieName.classList.add('list_title');

        if (i !== speciesLength) {
            specieName.innerHTML = `${species[i].name}`;
        }

        speciesSelect.appendChild(specieName);
    }
}
