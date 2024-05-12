
let count = 10;

count = 20;
// count = "eleven"

const myName: string = "tapas";

const isStudent: boolean = false;


// Arry []

let students: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

// <number>

let ages: Array<number> = [1,2,3,4];

let position: (string | number)[] = ['first', 1];

const multiDim: string[][] =[['abcd'],['defg']]

// Tuples

let ages1: [string, number] = ['ten', 10];

// any

let obj: any = {rad: 0};

obj.getRad();
obj.dim = "1234"

const age2: any = "Stone Age";


// function

function greetMe(name: string) : string{
  return `Hello ${name}`;
}

greetMe('atapas');


const candies: string[] = ['gummy', 'apple', 'nut', 'orange'];


candies.forEach(function(c) {
  console.log(c.toUpperCase());
})

candies.forEach((c) => {
  console.log(c.toUpperCase());
})


function printColor(color: {name: string, code?: string, index: number}) {
  console.log(`This is ${color.name} with ${color.index}`)
}

printColor({name: "white", code: "#fff", index:1});

// optional properties - ?

printColor({name: "white", index:1});

// Union

export function getPosition(position: number | string) {

  if (typeof position === "string") {
    console.log(position.split(" "));
  } else {
    console.log(position);
  }
}

getPosition(12);
getPosition("Twelve");

// Type Assertion

// as
// <>

const nickName: any = "brad";
const upperCasedNN = (nickName as string).toUpperCase();

const upperCasedNN1 = (<string> nickName).toUpperCase();


// null or undefined


const testStr: string = 'hello';
 
const greetings = [
  { name: "Oye" },
  { name: "Hello"},
  { name: "Hola"},
];
 
const found = greetings.find((greeting) => greeting.name === testStr);
console.log(found!.name);

// Non-null Assertion Operator - !
