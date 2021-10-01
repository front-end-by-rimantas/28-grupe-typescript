let a : number = 5;
console.log(a);

a = 785;
console.log(a);

let username : string = 'Vardenis';
username = '';

let gimimoMetai : number = 2020;
gimimoMetai = parseInt('1900');
gimimoMetai = 2000;
gimimoMetai = +'2000';

let arVedes : boolean = true;
let inputArVedesReiksme : string = 'false';
arVedes = inputArVedesReiksme === 'true';
console.log(inputArVedesReiksme);
console.log(arVedes);

function sumavimas(a : number, b : number) : string | boolean {
    if (typeof a !== 'number') {
        return false;
    }
    return '' + (a + b);
}

const suma1 : number = +sumavimas(7, 4);
console.log(suma1);

const suma2 : number = parseFloat(''+sumavimas(5, 88));
console.log(suma2);

let luckyNumber : number | string = 7;
luckyNumber = 'seven';

const pazymiai : number[] = [10, 2, 8, 4];

// ---------------------------------------------------------


interface Student {
    name: string;
    age: number;
    marks: number[];
}

let petriukas: Student = {
    name: 'Petriukas',
    age: 9,
    marks: [2, 4, 6],
}

let maryte: Student = {
    name: 'Maryte',
    age: 10,
    marks: [9, 7, 5],
}

let wanda: Student = {
    name: 'Wanda', 
    age: 10, 
    marks: [7, 8]
}

let antraKlase: Student[] = [petriukas, maryte, wanda];


class Pet {}
class Dog extends Pet {}
class Cat extends Pet {}


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) // Throws error

numArray.push(true); // Throws error
