console.log('Hello world!');
let age: number = 30;
if (age < 50)
    age += 10;

console.log(age);

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// any
// function add(document) {
//     return document;
// }

// array
let numbers: number[] = [];

// tuple

let num_tuple: [number, string] = [1, 'a'];

// enum
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {Small = 1, Medium, Large}

let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear: number = 2022): number {
    let x: number = 2022;
    if (taxYear < x)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(income: 1, taxYear: 2);

// object
let employee: { 
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, 
    name: 'bac',
    retire: (date: Date) => {
        console.log(date);
    }
};

// alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee2: Employee = {
    id: 1,
    name: 'a',
    retire: (date: Date) => {
        console.log(date);
    }
}

// union
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

// intersection
type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

// literal (exact, specific)
type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Level = 'A' | 'B';
let myLevel: Level = 'A';

// Nullable type
function greet(name: string) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(undefined);

// Optional chaining
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0? null: {birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer != null && customer != undefined)
// optional property access operator
    console.log(customer?.birthday);

// optional element access operator
// if (customer != null && customer != undefined)
//  customer[0]
    customer?.[0];
