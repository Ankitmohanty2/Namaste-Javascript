const { JSDOM } = require('jsdom');

// Function to fetch todos from the API
async function fetchTodos() {
  // Simulate fetch request since we can't make actual fetch calls in Node.js
  const data = {
    todos: [
      { id: 1, todo: "Do something nice for someone I care about", completed: true, userId: 26 },
        { id: 2, todo: "Learn something new", completed: false, userId: 26 },
        { id: 3, todo: "Get some exercise", completed: false, userId: 26 },
        { id: 4, todo: "Do something nice for someone I care about", completed: true, userId: 27 },
        { id: 5, todo: "Learn something new", completed: false, userId: 27 },
        { id: 6, todo: "Get some exercise", completed: false, userId: 27 }
    ]
  };
  return data.todos;
}

// Function to render todos grouped by user
async function renderTodos() {
  const todos = await fetchTodos();

  // Group todos by userId
  const todosByUser = {};
  todos.forEach(todo => {
    const userId = todo.userId;
    if (!todosByUser[userId]) {
      todosByUser[userId] = [];
    }
    todosByUser[userId].push(todo);
  });

  // Create a DOM environment using jsdom
  const { window } = new JSDOM('<!DOCTYPE html><div id="container"></div>');
  global.window = window;
  global.document = window.document;

  // Get the container element
  const container = document.getElementById("container");
  if (!container) {
    console.error("Container element not found");
    return;
  }

  // Render todos for each user
  Object.keys(todosByUser).forEach(userId => {
    const userTodos = todosByUser[userId];
    const userBlock = document.createElement("div");
    userBlock.classList.add("user-block");

    const title = document.createElement("h2");
    title.textContent = `User ${userId}`;
    userBlock.appendChild(title);

    const todoList = document.createElement("ul");
    userTodos.forEach(todo => {
      const todoItem = document.createElement("li");
      todoItem.textContent = todo.todo;
      todoList.appendChild(todoItem);
    });
    userBlock.appendChild(todoList);

    container.appendChild(userBlock);
  });

  console.log(container.innerHTML);
}

// Call renderTodos function to display todos
renderTodos();
