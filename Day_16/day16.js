// review Object
// Object Literal
let John = {
  firstName: 'John',
  lastName: 'Wick',
  age: 20,
  job: 'Hunter',
  harta: ['Mobil MMW', 'Rumah', 2000, 100000000],
  hidup: true,
};

let _harta = [];

class People {
  constructor(_firstName, _lastName, _age, _job, _harta, _hidup) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.job = _job;
    this.harta = _harta;
    this.hidup = true;
  }
}
