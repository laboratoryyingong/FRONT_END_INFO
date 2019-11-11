'use strict';
// class

class Cat {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    speak() {
        console.log("H....!");
    }
}

var cat = new Cat({first: 'Max', last: 'Gong'},'black');

console.log(cat); // Cat { name: 'Max', color: 'black' }
cat.speak();  // H....!

console.log(Object.getOwnPropertyDescriptor(cat, 'color'));

Object.defineProperty(cat,'name', {enumerable: true});

console.log(Object.keys(cat));

// Prototypes and inheritance
var arr= ['red', 'blue', 'green'];

Object.defineProperty(arr, 'last', {
    get: function(){
        return this[this.length-1]
    }
})

var last = arr.last;
console.log(last);

// function has prototype, the object does not have the prototype but has a __proto__ property
