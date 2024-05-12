/*
  - They return a boolean value.
  - They have a particular return type syntax where we use a keyword called "is".
 */

  function isNumber(value: any): value is number{
    return typeof value === 'number';
  }

  function doSomething(value: any) {
    if(isNumber(value)) {
      return value.toFixed(2);
    }

    return null;
  }

  type Animal = 'cat' | 'dog';

  interface Pet {
    animal: Animal;
  }

  class Dog implements Pet {
    animal: 'dog';

    public bark() {
      console.log('Vow Vow');
    }
  }

  const doberMan: Pet = new Dog();



  function petIsADog(pet: Pet): pet is Dog {
    return pet.animal === 'dog';
  }

  if (petIsADog(doberMan)) {
    doberMan.bark();
  }