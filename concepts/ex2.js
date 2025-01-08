class Person {
  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.age = 0;
  }
}

class Student {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
}

const student = new Student("Peeter", "Paan", 12);

const person = new Person();
person.firstname = "LeBron";
person.lastname = "James";
person.age = 40;
