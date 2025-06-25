const inputbox = document.getElementById("input_box");
const adding = document.getElementById("add");
const taskbox = document.getElementById("task_box");
//step 2
function addTask(task){
    const todolist = document.getElementById("task_box");
    const li = document.createElement("li");
    li.innerHTML = ` <li class="task">
              <label>
                <input type="checkbox" />
                <span class="task-text">${task}</span>
              </label>
              <div class="edit_btn">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
              </div>
            </li>
        `;
        todolist.appendChild(li)
}
 //step 1
 //form submission
 document.getElementById("todo_form") . addEventListener("submit",function(event){
    event.preventDefault();
    const inputTask = document.getElementById("input_box");
    const task = inputTask.value.trim();
    if(task !== ''){
        addTask(task);
        inputTask.value ="";
        inputTask.focus();  

    }


 });

 //delete button
 document.getElementById("task_box") . addEventListener("click",function(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.parentElement.remove();
    }
 });

 //edit button 
 document.getElementById("task_box") . addEventListener("click",function(event){
    if(event.target.classList.contains("edit")){
        const taskText  = event.target.parentElement.parentElement.querySelector("span");
        const newText  = prompt("enter a new text",taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText.trim();
        }
    }
 });

 //event
 document.getElementById("task_box").addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const taskText = event.target.closest("label").querySelector(".task-text");
    if (event.target.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
  }
});