let isDone: boolean = false;
let decimal: any = 5; // If we dont know what type variable will be we call any!...
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = 'blue';
color = 'red';

let list: number[] = [1, 2, 3]; // Array from numbers
let strictNumbers: [5, string] = [5, 'string']; //Array from 2 indexes a number 5 and some string

// Functions ---------------------------------------------
function sumNumbers(nums: number[]) {
    let sum = 0;
    for (let num of nums) {
        sum += num
    }
    return sum;
}
console.log(sumNumbers([5, 5]));

function createUser(username: string, age: number) {
    return {
        username,
        age,
    }
}
console.log(createUser('ivan', 100));

// Enums -------------------------------------------------------
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = 1,
}

// Generics -------------------------------------------------
function id<Type>(item: Type): Type {
    return item;
}

interface sOrN {
    prop1: string,
    prop2: number
}

type stringOrNumber = sOrN | number;
type BooleanArray = Array<boolean>;

let num = id<sOrN>({ prop1: '1', prop2: 2 });

// Classes; 'public' and 'private' properties...------------------------------------

class User {
    constructor(public name: string, private age: number) { }
}

const ivan = new User('Ivan', 30);

