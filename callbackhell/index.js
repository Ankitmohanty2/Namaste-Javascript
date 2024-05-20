// Simulate an asynchronous operation with setTimeout
function asyncOperation1(callback) {
  setTimeout(function () {
    console.log("Operation 1 completed");
    callback();
  }, 1000);
}

function asyncOperation2(callback) {
  setTimeout(function () {
    console.log("Operation 2 completed");
    callback();
  }, 1000);
}

function asyncOperation3(callback) {
  setTimeout(function () {
    console.log("Operation 3 completed");
    callback();
  }, 1000);
}

// Example of callback hell
asyncOperation1(function () {
  // Nested callback 1
  asyncOperation2(function () {
    // Nested callback 2
    asyncOperation3(function () {
      // Nested callback 3
      console.log("All operations completed");
    });
  });
});
