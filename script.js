const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function getTodos() {
  fetch(apiUrl + "?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addToDOM(todo));
    });
}

function addToDOM(todo) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
}

const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
        title:e.target.firstElementChild.value,
        completed:false
    }


    fetch(apiUrl,{
        method: 'POST',
        body:JSON.stringify(newTodo),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
     .then(res=>res.json())
     .then(data=>addToDOM(data));
}

const init = ()=>{
    document.addEventListener('DOMContentLoaded', getTodos);
    //same as getTodos();
    document.querySelector("#todo-form").addEventListener('submit', createTodo);
}

init();

