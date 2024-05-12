/*
- "string"
 - "number"
 - "bigint"
 - "boolean"
 - "symbol"
 - "undefined"
 - "object"
 - "function"

 - typeof value === "string"

*/

function dosomething(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLocaleLowerCase()); 
  } else {
    console.log(value.toPrecision(3));
  }
}

dosomething("tapaScript");
dosomething("2.58954");


function checkAndPrint(value: string | string[] | null) {
  if (value && typeof value === "object") {
    for (const key of value) {
      console.log(key);
    }
  } else if(typeof value === "string") {
    console.log(value.toLocaleUpperCase);
  }
}

checkAndPrint(['eat', 'code', 'sleep']);

checkAndPrint('dream');

checkAndPrint(null);

