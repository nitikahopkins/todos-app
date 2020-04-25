console.log("nitika");

function getTodods() {
  //var list =
  return (
    fetch("https://jsonplaceholder.typicode.com/todos/")
      //     //console.log(list);
      //     .then((res) => {
      //       //console.log(res.json());
      //       return res.json();
      //     })
      //     .then((json)=>{

      //     })
      //     .catch((error) => {
      //       throw new Error(error);
      //     });
      // }

      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error))
  );
}
//console.log(getTodods());

async function setTodos() {
  const todos = await getTodods();
  console.log(todos);
  const ul = document.querySelector("#todos");
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = todo.title;
    if (todo.completed) {
      li.classList.add("strike-through");
    }
    ul.appendChild(li);
  });
}
setTodos();
