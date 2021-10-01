"use strict";
let a = 5;
console.log(a);
a = 785;
console.log(a);
let username = 'Vardenis';
username = '';
let gimimoMetai = 2020;
gimimoMetai = parseInt('1900');
gimimoMetai = 2000;
gimimoMetai = +'2000';
let arVedes = true;
let inputArVedesReiksme = 'false';
arVedes = inputArVedesReiksme === 'true';
console.log(inputArVedesReiksme);
console.log(arVedes);
function sumavimas(a, b) {
    return '' + (a + b);
}
const suma1 = +sumavimas(7, 4);
console.log(suma1);
const suma2 = parseFloat(sumavimas(5, 88));
console.log(suma2);
let luckyNumber = 7;
luckyNumber = 'seven';
const pazymiai = [10, 2, 8, 4];
let petriukas = {
    name: 'Petriukas',
    age: 9,
    marks: [2, 4, 6],
};
let maryte = {
    name: 'Maryte',
    age: 10,
    marks: [9, 7, 5],
};
let wanda = {
    name: 'Wanda',
    age: 10,
    marks: [7, 8]
};
let antraKlase = [petriukas, maryte, wanda];
