interface ICustomer {
  name: string;
  address: string;
}

interface AusCust extends ICustomer {
  location: string;
}

const milano: ICustomer = {
  name: 'Milano Corporation',
  address: 'Germany'
}



class GoldenChase implements ICustomer {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

const GCBangalore = new GoldenChase("Golden Chase Arcade", "Bangalore");

type test = number | string;

const random: test = 1234;

type movies = 'horror' | 'comedy' | 'romantic';

interface A {

}

interface B {

}

type AB = A | B;
