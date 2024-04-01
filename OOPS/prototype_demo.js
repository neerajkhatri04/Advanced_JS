//constructor functions//
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}
console.log(Dog.prototype); //Dog {constructor: Dog()}
console.log(Dog.prototype.constructor); //same function

const car = function (color, modal, date) {
  this.color = color;
  this.modal = modal;
  this.date = date;
};
car.prototype.getColor = function () {
  return this.color;
};
car.prototype.getModal = function () {
  return this.modal;
};
car.prototype.getDate = function () {
  return `This ${this.modal} is manufactured in the year ${this.data}`;
};

const myCar = new car("Blue", "Sedan", 2020);
console.log(myCar);
console.log(myCar.getColor()); //Blue -->Instance inheriting from car object
