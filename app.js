//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

//Event-listeners
todoButton.addEventListener("click", (event) => {
  //Prevent form from submitting
  event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerHTML = todoInput.value;

    todoDiv.appendChild(newTodo);
    //check mark button
    const completeButton = document.createElement("button");
    completeButton.classList.add("completeBtn");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeButton);
    //check trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trashBtn");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    //append
    todoList.appendChild(todoDiv);

    //clear input value
    todoInput.value = "";
});

todoList.addEventListener('click', (e) => {
    //delete todo
    if(e.target.classList[0] === 'trashBtn'){
        //parantElement -> todo
        e.target.parentElement.remove();
    }
    
    //complete todo
    if(e.target.classList[0] === 'completeBtn'){
        e.target.parentElement.classList.toggle('completed');
        // console.log(e.target.classList);
        // e.target.parentElement.style.textDecoration = 'line-through';
        // e.target.parentElement.style.opacity = '0.5';
    }
})


filterOption.addEventListener('click', filterTodo);

//function
function filterTodo(e){
    const todos = todoList.childNodes;
    // console.log(todos[0])
    for (let i = 1; i < todos.length; i++) {
        switch (e.target.value) {
            case "all":
                todos[i].style.display = 'flex';
                break;
            case "completed":
                if(todos[i].classList.contains("completed")){
                    // console.log("hi");
                    todos[i].style.display = 'flex';
                }else{
                    todos[i].style.display = 'none';
                    // console.log("hello");
                }
                break;

            case 'uncompleted':
                if(!todos[i].classList.contains('completed')){
                    todos[i].style.display = "flex";
                }else{
                    todos[i].style.display = "none";
                }
                break;
        }
        
    }
    
}



