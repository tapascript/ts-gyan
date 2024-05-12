/*

h is instance of "Human" if and only if, the prototype chain of h contains Human.prototype.

*/

function checkThing(value: string | Date) {
  if (value instanceof Date) {
    console.log(value.getTime());
  } else {
    console.log(value.toLocaleLowerCase())
  }
}

export class Student {
  private name: string;
  private age: number;
  private marks: number;

  constructor(name: string, age: number, marks: number) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }

  getMarks(): number {
    return this.marks;
  }
}

function checkMarks(value: Student | string) {
  if (value instanceof Student) {
    console.log(value.getMarks());
  } else {
    console.log(`No Marrks available for student ${value}`)
  }
} 

const akash = new Student("Akash", 23, 980);

checkMarks(akash);

checkMarks("tapaScript");