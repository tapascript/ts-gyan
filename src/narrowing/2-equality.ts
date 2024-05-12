

function doSomething(a: string|number, b: string|string[]) {
  if (a === b) {
    a.split(',');
    b.toUpperCase();
  } else {
    console.log(a);
    console.log(b);
  }
}