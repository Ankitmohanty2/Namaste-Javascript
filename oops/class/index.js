// Define a class using JavaScript ES6 syntax
class Car {
  // Constructor to initialize properties
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to get the age of the car
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  // Static method to compare two cars by age
  static compareAge(car1, car2) {
    return car1.getAge() - car2.getAge();
  }
}

// Create instances of the Car class
let car1 = new Car("Toyota", "Corolla", 2018);
let car2 = new Car("Honda", "Civic", 2015);

// Access properties and call methods
console.log(car1.brand); // Output: Toyota
console.log(car2.getAge()); // Output: 9

// Call static method
console.log(Car.compareAge(car1, car2)); // Output: 3
