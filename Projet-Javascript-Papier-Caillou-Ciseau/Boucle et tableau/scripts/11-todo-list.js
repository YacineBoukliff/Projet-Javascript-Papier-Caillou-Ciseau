const todolist = [{
  name : "Test si ca marche",
   dueDate : "2022-12-22"},
  ];

renderTodoList();

function renderTodoList() {
  let todolistHtml = "";
  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    const { name,dueDate } = todoObject
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
   
     <button onclick ="
     todolist.splice(${i},1);
     renderTodoList();
     " class = "delete-todo-button">Delete</button>
     `;
    todolistHtml = todolistHtml + html;
  }
  document.querySelector(".js-todo-list").innerHTML = todolistHtml;
}

function addtodo() {
  const inputElement = document.querySelector(`.js-name-input`);
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value
  todolist.push({
    name
    ,dueDate});
  inputElement.value = "";
  renderTodoList();
}
