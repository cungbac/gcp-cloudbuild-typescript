"use strict";
console.log('Hello world!');
let age = 30;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let numbers = [];
let num_tuple = [1, 'a'];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    let x = 2022;
    if (taxYear < x)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(1, 2);
let employee = {
    id: 1,
    name: 'bac',
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 1,
    name: 'a',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map