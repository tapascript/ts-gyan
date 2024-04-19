export {}

interface Employee {
  id: string,
  name: string,
  age: number,
  married: boolean
}

const employees: Employee[] = [
  {
    id: '01',
    name: 'Alex',
    age: 23,
    married: false
  },
  {
    id: '02',
    name: 'Bob',
    age: 3,
    married: false
  },
  {
    id: '03',
    name: 'Clara',
    age: 28,
    married: true
  }
];

const marriedEmployees: Employee[] = employees.filter(emp => emp.married);

console.log(marriedEmployees);