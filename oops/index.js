const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  getAgeYear: function () {
    return new Date().getFullYear() - this.age;
  },
};

console.log(user.getAgeYear());
