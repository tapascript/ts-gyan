

type Circle = {
  kind: "circle",
  radius: number
}

type Square = {
  kind: "square",
  side: number;
}

type Shape = Circle | Square;

const s1: Shape = {kind: "circle", radius: 1};
const s2: Shape = {kind: "square", side: 20};

//const s3: Shape = {age: 23}

function getArea(s: Shape) {
  if(s.kind === "square") {
    return s.side * s.side;
  } else {
    return Math.PI * s.radius * s.radius
  }
}

getArea(s1);

getArea(s2);