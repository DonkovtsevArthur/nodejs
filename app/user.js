function User(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = () => {
    console.log(`Name: ${this.name}; Age: ${this.age}`);
  };
}

User.prototype.sayHi = function() {
  console.log(`Hello, my name is ${this.name}`);
};
module.exports = User;