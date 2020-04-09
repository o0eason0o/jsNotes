// inheritance

// basic object.create example
var userInfo = {
    name: "Eason",
    age: 30,
    salary: 9999999,
    designation: "Developer"
}

var newObject = Object.create(userInfo);

console.log(newObject);
// {}, but all stuffs are there because of .__proto__
newObject.name = 'test';

/**
    now newObject.name is "test",
    but newObject.__proto__.name is still "Eason"

    Advantages of "Object.create":
    1. function and property re-usability
     function and property re-usability in cases 
     when we have some hierarchical data representation 
     or if we need to show some inheritance traits from Source Object to Destination Object

    Disadvantages of “Object.create”:
    1. If the source is modified, all children's .__proto__ properties are modified.
     not a big problem, because newObject.name would stay the same.
*/


// other references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

let o;
function Constructor() { }
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code
// in the Constructor function, 
// the Object.create() cannot reflect it

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });
// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24;
o.p;
// 42
o.q = 12;
for (var prop in o) {
    console.log(prop);
}
// 'q'

delete o.p;
// false

// o = Object.create({}, {
o = Object.create(Object.prototype, {
    // foo is a regular 'value property'
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    // bar is a getter-and-setter (accessor) property
    bar: {
        configurable: false,
        get: function () { return 10; },
        set: function (value) {
            console.log('Setting `o.bar` to', value);
        }
        /* with ES2015 Accessors our code can look like this
            get() { return 10; },
            set(value) {
              console.log('Setting `o.bar` to', value);
            } */
    }
});

// to create an object that inheritance nothing. no properties no methods. 
Object.create(null);


// class example 
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}
var square = new Square(2);



// another VERY GOOD example
// https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/
let leo;

// before ES6
function Animal(name, energy) {
    this.name = name;
    this.energy = energy; ßß
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
}
Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
}
Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
}
leo = new Animal('Leo', 7);

/** IMPORTANT **/
// Dog inherit methods of Animal. Don't forget to assign source prototype to child.
function Dog(name, energy, breed) {
    Animal.call(this, name, energy);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);

// assign methods only to Dog
Dog.prototype.bark = function () {
    console.log('Woof Woof!');
    this.energy -= .1;
}
//   assign prototype to Dog, otherwise it would point to Animal.
Dog.prototype.constructor = Dog;
// leo will have all the properties and methods, including bark. Constructor: Dog.
let john = new Dog('john', 100, 'whatEver');

function Cat(name, energy, declawed) {
    Animal.call(this, name, energy);
    this.declawed = declawed;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
    console.log('Meow!');
    this.energy -= .1;
}
let littleD = new Cat('littleD', 999, true);


// ES6, works the same as above
class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating.`);
        this.energy += amount;
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
        this.energy += length;
    }
    play() {
        console.log(`${this.name} is playing.`);
        this.energy -= length;
    }
}
leo = new Animal('Leo', 7);

// How to create subclass: syntax
// class Subclass extends Baseclass {}
class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy); // calls Animal's constructor
        this.breed = breed;
    }
    bark() {
        console.log('Woof Woof!');
        this.energy -= .1;
    }
}











