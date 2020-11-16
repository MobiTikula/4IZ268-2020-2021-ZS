
//Tyhle zpravy vypisou zpravu do konzoli
/*
qw qw
qw qw
qw */
console.log('Ahoj svete!');
console.error('Hele chyba!');
console.error('Upozorneni!');
// var. let, const
let age = 42;
console.log(age);

const height = 170;
console.log(height);

age = 12;
console.log(age);

//height = 100;
//console.log(height);

// STring, Number, Boolean, null, underfined, Symbol
const pi = 3.14 //Number - integer, double, float 
const message = 'Ahoj, jmenuji se Pepa a chci se nau4it JavaScript!';
console.log(message);

const isLive = true;
const isMarried = false;
console.log(isLive, isMarried);

const something = null;
const somethingElse = undefined;

console.log(something, somethingElse);

console.log(typeof isLive);
console.log(typeof message);
console.log(typeof pi);

//STrings / retezce

const string1 = 'Ahoj';
const string2 = 'svete';
// concatenation / zretezeni;
const string = string1 + ' ' + string2;
console.log(string);

console.log('Hodnota PI = ' + pi);

const myAge = 44;
const myName = 'Sebastian';
const str = 'Ahoj, jmenuji se ${myName} a je mi ${myAge} let';
console.log(str);

console.log(myName.length);
console.log(myName.toUpperCase());

console.log(myName.slice(0, 2));
console.log(myName.slice(1, 3));
console.log(myName.split(''));
console.log(myName.split('c'));

//pole / arrays
const fruits = ['ananas', 'banana', 'melon', 'strawberry', null, undefined, false];
console.log('We have ' + fruits.length + ' fruits');
const numbers = [0, 1, 2, 3, 4];
console.log(numbers);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log('--------------------')
for (let i = 0; i < fruits.length; i++) {
    fruits[i];
}

console.log('---------------------')
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;

}

fruits.push('orange');
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('apple');
console.log(fruits);

//objects 
const person = {
    age: 42,
    nationality: 'Czech Republic',
    name: 'Pepa',
    surname: 'Mach',
};

console.log(person.name + ' ' + person.surname);

const people = [
    {
        age: 12,
        name: 'David',
    },
    {
        age: 34,
        name: 'Ales',
    },
    {
        age: 56,
        name:'German',

    },
    {
        age: 17,
        name: 'George',
    }, 
];

for (let i=0; i < people.length; i++) {
    console.log(people[i].name + ' ' + people[i].age);
}

people.forEach((person) => {
console.log(person);
});

// conditionals, if else

if (isMarried) {
    console.log(123);
} else {
    console.log(456);
}

//functions
//const add = function () {};
const add = (a, b) => {
const result = a + b;
return result;
};

console.log(add(2, 3));

