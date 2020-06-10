import { House } from './classes/houses/House.js';
import { Apartment } from './classes/houses/Apartment.js';
import { UI } from './classes/UI.js';
// ui instantiation
var ui = new UI(document.getElementById('house-form'), document.getElementById('apt-form'), document.getElementById('loft-form'), document.getElementById('studio-form'), document.getElementById('tipi-form'), document.getElementById('vila-form'), document.getElementById('house-counter'), document.getElementById('apt-counter'));
var house;
var apartment;
// let loft: Loft;
// let studio: Studio;
// let tipi: Tipi;
// let vila: Vila;
function clearInputs(listOfInputs) {
    listOfInputs.forEach(function (input) { return (input.value = ''); });
}
function updateCounter(counterEl) {
    var counter = +counterEl.innerText;
    counter++;
    counterEl.innerText = counter.toString();
}
ui.houseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputsList = Array.from(ui.houseForm.querySelectorAll('input'));
    house = new House(+inputsList[0].value, +inputsList[1].value);
    updateCounter(ui.houseCounter);
    house.print();
    clearInputs(inputsList);
});
ui.aptForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputsList = Array.from(ui.aptForm.querySelectorAll('input'));
    apartment = new Apartment(+inputsList[0].value, +inputsList[1].value, +inputsList[2].value);
    apartment.print();
    updateCounter(ui.aptCounter);
    clearInputs(inputsList);
});
