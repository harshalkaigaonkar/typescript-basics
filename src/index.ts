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
// type can also be used for primitives and unions
type User1 = number | string

let var1: User1 = 5;

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


// Interfaces
// they are similar as type but it cannot be used for primitives and unions

interface UserInterface {
   readonly id?: number,
    name: string,
    email?: string,
    age?: number
}

const user2: UserInterface = {
    id: 12334,
    name: "adf",
    email: "EWrb"
}

const user3: UserInterface = {
    id: 2345,
    name: "qwf",
    email: "swerg",
    age: 2345
}

// user2.id = 123  this gives error coz id is readonly
// but
user2.name= 'afsgd';

// Functional Interface

interface UserFunction {
    (x: number, y: number): number
}

const addFunc: UserFunction = (x: number, y: number): number => x+y;
const sub: UserFunction = (x: number, y: number): number => x-y;

// Classes

class Person {
    // data modifiers
    id: number
   protected phone: number
    name: string // public is default
    private fnum?: number

    constructor(id: number,phone:number, name: string) {
         this.id = id
         this.name = name
         this.phone = phone
         this.fnum = 23
    }
    register(): string {
        return `${this.id} is fnum`
    }
 }

const object1 = new Person(1, 234, 'Anonymous')
const object2 = new Person(2, 23784, 'Anonymous_1')
// console.log(object1.id) 
// as it is private we cannot change or access it outside class
// console.log(object1.phone)
// as it is protected we can only change it inside class 
console.log(object1.name)
console.log(object2.register())

// Inheritance (Interface Implementation)
interface PersonImplementation {
    id: number
    name: string
    register(): string
    funcn(num: number[]): number
}

class PersonClass implements PersonImplementation {
    id: number
    name: string
    bool: boolean

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        this.bool = true
    }

    register(): string {
        return `${this.id} and ${this.name}`
    }

    funcn(num: number[]): number {
        let sum: number = 0
        num.map(nu => sum += nu);
        return sum;
    }

    fun(): void {
        console.log('function is added')
    }
}

// Extending Classes (Subclasses)

class Human extends Person {
    position: string

    constructor(id: number,phone: number, name: string, position: string) {
        super(id, phone, name)
        this.position = position
    }

    register(): string {
        return this.position
    }
    
}

const Species = new Human(234, 312, 'eraewrd', 'wefg');
console.log(Species.register())

// Generics ()

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['fewr', 'efwr', 'fewr']);

// for numArray, we cant add a string or any other type 
// eg. numArray.push('qwefr') will get an error

// but 
numArray.push(2, 6);
strArray.push('cfghj', 'fghj', 'cvbhj');