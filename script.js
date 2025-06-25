const inputbox = document.getElementById("input_box");
const adding = document.getElementById("add");
const taskbox = document.getElementById("task_box");
//step 2
function displayinput(){
    let inputdata = inputbox.value;
    //create DOM element
    let li = document.createElement('li');
    li.innerText = inputdata;
    taskbox.appendChild(li);
    inputbox.value='';
    console.log(li);
}
//step 1
//add element in inputbox
adding.addEventListener("click",displayinput);