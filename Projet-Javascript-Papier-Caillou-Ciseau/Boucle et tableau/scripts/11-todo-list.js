const todolist = ["make dinner", "wash dishes"];

renderTodoList();

function renderTodoList() {
  let todolistHtml = "";
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const html = `<p> ${todo}</p>`;
    todolistHtml = todolistHtml + html;
  }

  console.log(todolistHtml);

  document.querySelector(".js-todo-list").innerHTML = todolistHtml;
}
function addtodo() {
  const inputElement = document.querySelector(`.js-name-input`);
  const name = inputElement.value;
  todolist.push(name);
  console.log(todolist);
  inputElement.value = "";
  renderTodoList();
}
