function getPosition(position: number | string) {

  if (typeof position === "string") {
    console.log(position.split(" "));
  } else {
    console.log(position.toFixed(2));
  }
}

getPosition(12);
getPosition("Twelve");

// getPosition(true);

/*
There are a multiple approaches to acheive Narrowing:

- using the "typeof" type guard
- using the "equality" operators
- using the "in" operator
- using the "instanceof" guard
- using the "type predicates"
- using the "discriminated unions"
*/