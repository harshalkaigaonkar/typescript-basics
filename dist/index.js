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
console.log('ID:', id, x1, arr1, typeof idnumber2, add(2, 3));
