// Imagine we're creating a class for cats
class Cat {
  // The constructor is like a magic spell that creates a cat when we call it
  constructor(name, color) {
    this.name = name; // Every cat has a name
    this.color = color; // Every cat has a color
    this.energy = 100; // Every cat starts with full energy
  }

  // This is a method, which is like a special ability our cat has
  // Let's say our cat can meow
  meow() {
    console.log(`${this.name} says: Meow!`);
  }

  // And our cat can also sleep to regain energy
  sleep() {
    console.log(`${this.name} is sleeping 💤`);
    this.energy += 10; // Sleeping gives our cat more energy
  }
}

// Now let's create some cats using our class
const fluffy = new Cat("Fluffy", "white");
const whiskers = new Cat("Whiskers", "gray");

// Let's make them do something
fluffy.meow(); // Fluffy says: Meow!
whiskers.meow(); // Whiskers says: Meow!

// Let's make them sleep
fluffy.sleep(); // Fluffy is sleeping 💤
whiskers.sleep(); // Whiskers is sleeping 💤

// Let's see their energy levels after sleeping
console.log(`${fluffy.name}'s energy: ${fluffy.energy}%`);
console.log(`${whiskers.name}'s energy: ${whiskers.energy}%`);
