type magicNumber = number;

const tShrirts: magicNumber = 20;

type Employee = {
  id: number,
  name: string,
  email: string,
  salary: number,
  address?: string
}

const adam: Employee = {
  id: 234,
  name: 'Adam',
  email: 'adam@email.com',
  salary: 1200,
}

console.log(adam);

type Department ={
  name: string,
  employees: Employee[],
}

const sales: Department = {
  name: 'Sales',
  employees: [adam],
}

type ISBN = number | string;

const bookIsbn1: ISBN = 13243;

const bookIsbn2: ISBN = "847384dks";

// &

type User = {
  id: number,
  name: string,
  email: string,
  password: string
}

type Admin = User & {
  role: "admin",
}

type Customer = User & {
  role: "customer",
}

const admin: Admin = {
  id:1234,
  name: "Bob",
  email: "bob@example.com",
  password: "password",
  role: "admin"
}

const cust: Customer = {
  id:5454,
  name: "Alex",
  email: "alex@example.com",
  password: "4343",
  role: "customer"
}

type startsWithTapaScript = `tapaScript${string}`;

const tsYT: startsWithTapaScript = 'tapaScript YouTube Channel'


type calc = (a: number, b: number) => number;

const sum: calc = (p, q) => p + q;

const mul: calc = (p, q) => p * q;

console.log(sum(2 , 3));
console.log(mul(5, 6));

