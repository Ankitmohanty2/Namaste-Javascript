// Car class with encapsulation
class Car {
  // Constructor to initialize properties
  constructor(brand, model, year) {
    // Private properties
    let _brand = brand;
    let _model = model;
    let _year = year;

    // Getter methods to access private properties
    this.getBrand = () => _brand;
    this.getModel = () => _model;
    this.getYear = () => _year;

    // Setter method to change the year (demonstrating encapsulation)
    this.setYear = (newYear) => {
      if (newYear > _year) {
        _year = newYear;
      } else {
        console.log("Can't set year to a previous value.");
      }
    };
  }

  // Method to get the age of the car
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.getYear();
  }
}

// Create an instance of the Car class
let car = new Car("Toyota", "Corolla", 2018);

// Access properties using getter methods
console.log(car.getBrand()); // Output: Toyota

// Try to set the year
car.setYear(2020); // Output: Can't set year to a previous value.

// Access properties directly (not recommended)
console.log(car._brand); // Output: undefined
