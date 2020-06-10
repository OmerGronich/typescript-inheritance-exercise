import { House } from './classes/houses/House.js';
import { Apartment } from './classes/houses/Apartment.js';
import { Loft } from './classes/houses/Loft.js';
import { Studio } from './classes/houses/Studio.js';
import { Tipi } from './classes/houses/Tipi.js';
import { Vila } from './classes/houses/Vila.js';

import { UI } from './classes/UI.js';

// ui instantiation
const ui = new UI(
	document.getElementById('house-form') as HTMLFormElement,
	document.getElementById('apt-form') as HTMLFormElement,
	document.getElementById('loft-form') as HTMLFormElement,
	document.getElementById('studio-form') as HTMLFormElement,
	document.getElementById('tipi-form') as HTMLFormElement,
	document.getElementById('vila-form') as HTMLFormElement,
	document.getElementById('house-counter') as HTMLElement,
	document.getElementById('apt-counter') as HTMLElement
);

let house: House;
let apartment: Apartment;
// let loft: Loft;
// let studio: Studio;
// let tipi: Tipi;
// let vila: Vila;

function clearInputs(listOfInputs: HTMLInputElement[]): void {
	listOfInputs.forEach(input => (input.value = ''));
}

function updateCounter(counterEl: HTMLElement): void {
	let counter = +counterEl.innerText;
	counter++;
	counterEl.innerText = counter.toString();
}

ui.houseForm.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	const inputsList = Array.from(ui.houseForm.querySelectorAll('input'));
	house = new House(+inputsList[0].value, +inputsList[1].value);
	updateCounter(ui.houseCounter);
	house.print();
	clearInputs(inputsList);
});

ui.aptForm.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	const inputsList = Array.from(ui.aptForm.querySelectorAll('input'));
	apartment = new Apartment(
		+inputsList[0].value,
		+inputsList[1].value,
		+inputsList[2].value
	);
	apartment.print();
	updateCounter(ui.aptCounter);

	clearInputs(inputsList);
});
