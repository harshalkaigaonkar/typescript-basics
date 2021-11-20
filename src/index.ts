let id: number = 5
let a: string = "Dear"
let b: string = 'dedee'
let c: boolean = false
let x1: any = "Heloo"
x1 = b;
// arrays
let ids: number[] = [1, 2, 3, 4, 4, 5]
let arr: any[] = [1, false, '3', 4, NaN, null]
// tuples
let person: [number, boolean, string] = [1, true, "fsda"];
// tuple arrays
let app: [number, string][] = [[1, 'adf'], [2, 'sef']];
// union
let uid: number | string = "sdgfer"
uid = 23 
// enums
enum Direction1 {
    up =1, down, left, right='right'
}
let arr2: Direction1 = Direction1.down // 2 (1++)
let arr1: Direction1 = Direction1.right // right string

// Objects

const obj: {
    id: number, name: string, add: string, isBlind: boolean
} = {
    id: 2,
    name: 'Anonymous',
    add: "Don't Know..",
    isBlind: false
}

//  or 
// using Types
type User = {
    id: number, name: string, add: string, isBlind: boolean
}

let obj1: User = {
    id: 2,
    name: 'Anonymous',
    add: "Don't Know..",
    isBlind: false
}

// Type Assrtions
// explicitly assigning the type of variable after initiating it with type any
let id2: any = '1'
let idnumber2 = <string>id2;
// now type of id2 cannot cannot be changed 
// or another way of writing same type is
let id3: any = 3
let idnumber3 = id3 as number;

// functions
function add(x: number, y: number): number { // (parameters type) return type
    return x+y;
}

function log (msg: string | number): void {
    console.log(msg);
}

console.log('ID:', id, x1, arr1,typeof idnumber2, add(2, 3));