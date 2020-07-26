//String operatorok - osszefuzes
let iz1 = 'malna';
let iz2 = 'bodza';
let ital1 = 'szorp';

console.log('Kedvencem a ' + iz1 + ital1);

const a = 'epitesz';
a += 'suli';
console.log(a);

//String operatorok
let iz1 = 'malna';
let iz2 = 'bodza';
let ital1 = 'szorp';

console.log('Kedvencem a ' + iz1 + ital1);
//matimatikai, artimetikai operatorok
const a = 3;
const b = 5;
const eredmeny = a + b * 5;
console.log(a * b + 5);

console.log(eredmeny);

console.log(5 % 3);
//ertekado operatorok
let c = 3;
c++;
console.log(c);

c--;
console.log(c);

let d = 3;
d = d + 5;
console.log(d);
let e = 3;
e += 5;
console.log(e);
e *= 5;
console.log(e);

//osszehasonlito operatorok

console.log(d == e);
console.log(d > 2);
console.log(d > 8);
console.log(d >= 8);
console.log(d != 3);

//Logikai

const logikai = true;
console.log(logikai);
console.log(!logikai); //! negalas mindig

const allitas1 = false;
const allitas2 = true;
// ÉS: &&
console.log(allitas1 && allitas2);

console.log(true && true);
console.log(true && false);

// VAGY: ||

console.log(true || false || false || false);
console.log(false || false || false || false);

console.log(true && (false || true));
