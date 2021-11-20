"use strict";
let id = 5;
let a = "Dear";
let b = 'dedee';
let c = false;
let x1 = "Heloo";
x1 = b;
let ids = [1, 2, 3, 4, 4, 5];
let arr = [1, false, '3', 4, NaN, null];
let person = [1, true, "fsda"];
let app = [[1, 'adf'], [2, 'sef']];
let uid = "sdgfer";
uid = 23;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1["right"] = "right";
})(Direction1 || (Direction1 = {}));
let arr2 = Direction1.down;
let arr1 = Direction1.right;
const obj = {
    id: 2,
    name: 'Anonymous',
    add: "Don't Know..",
    isBlind: false
};
let obj1 = {
    id: 2,
    name: 'Anonymous',
    add: "Don't Know..",
    isBlind: false
};
let var1 = 5;
let id2 = '1';
let idnumber2 = id2;
let id3 = 3;
let idnumber3 = id3;
function add(x, y) {
    return x + y;
}
function log(msg) {
    console.log(msg);
}
const user2 = {
    id: 12334,
    name: "adf",
    email: "EWrb"
};
const user3 = {
    id: 2345,
    name: "qwf",
    email: "swerg",
    age: 2345
};
user2.name = 'afsgd';
const addFunc = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, phone, name) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.fnum = 23;
    }
    register() {
        return `${this.id} is fnum`;
    }
}
const object1 = new Person(1, 234, 'Anonymous');
const object2 = new Person(2, 23784, 'Anonymous_1');
console.log(object1.name);
console.log(object2.register());
class PersonClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.bool = true;
    }
    register() {
        return `${this.id} and ${this.name}`;
    }
    funcn(num) {
        let sum = 0;
        num.map(nu => sum += nu);
        return sum;
    }
    fun() {
        console.log('function is added');
    }
}
class Human extends Person {
    constructor(id, phone, name, position) {
        super(id, phone, name);
        this.position = position;
    }
    register() {
        return this.position;
    }
}
const Species = new Human(234, 312, 'eraewrd', 'wefg');
console.log(Species.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['fewr', 'efwr', 'fewr']);
numArray.push(2, 6);
strArray.push('cfghj', 'fghj', 'cvbhj');
