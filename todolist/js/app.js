// UI
const form = document.getElementById('task-form');
const  taskinput= document.getElementById('task');
const filter= document.getElementById('filter');
const tasklist= document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-task');

function addtask(e){
    // console.log("hey");

    // if(taskinput.value === ""){
    //     window.alert("Add a task");
    // }

    if(taskinput.value === ""){
        window.alert("Add a task");
        return;
    }


    // create li element
    const li = document.createElement('li');

    // add class
    li.className = "collection-item";

    // create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));

    // create link
    const link = document.createElement("a");

    // add class
    link.className = "delete-item secondary-content";

    // add icon
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;

    // append link to li
    li.appendChild(link);

    // append li to ul
    tasklist.appendChild(li);

    // store in localStorage
    storetaskinlocalstroage(taskinput.value);


    // console.log(link);
    // console.log(li);

    e.preventDefault();
}

// remove task
function removetask(e){
    // console.log(e.target);

    // console.log(e.target.parentElement);

    if(e.target.parentElement.classList.contains("delete-item")){
        // console.log("delete item");
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();

            // Remve task from localStorage
            removetaskfromlocalstorage(e.target.parentElement.parentElement);

        }

    }


}


// Clear Task
function cleartask(){
    // console.log("hey");

    // Method 1
    // tasklist.innerHTML="";

    // Method2
    // console.log(tasklist);
    // console.log(tasklist.childElementCount);

    // let x = 0;
    // while ( x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    // Method3
    while (tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    cleartaskslocalstorage();
}

// Store Task

function storetaskinlocalstroage(task){
    // console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);


    console.log(tasks);

    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Get task from localStorage
function gettasks(){
    // console.log("hey");

    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task)=>{
        // console.log(task);

        // create li element
        const li = document.createElement('li');
        // console.log(li);

        // Add class
        li.className = 'collection-item';

        // create Text Node append to li
        li.appendChild(document.createTextNode(task));

        // create new link
        const link = document.createElement('a');

        // add class
        link.className = "delete-item secondary-content"

        // add icon
        link.innerHTML = `<i class="far fa-trash-alt"></i>`;

        // append link to li
        li.appendChild(link);

        // append li into ul
        tasklist.appendChild(li);

    });

}

// Remove task from localStorage
function removetaskfromlocalstorage(taskitem){
    // console.log("hey");
    // console.log(taskitem);
    console.log(taskitem.textContent);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index)=>{
        // console.log(task);

        if(taskitem.textContent === task){
 // where we want to start(index),where we want to end(how many)
            tasks.splice(index,1);
        }

    });

    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Clear All Data from localStorage
function cleartaskslocalstorage(){
    localStorage.clear();
}

// Filter task
function filtertask(e){
    // console.log('hey');
    // console.log(e.target);
    const inputfilter = e.target.value.toLowerCase();

    // console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');
    // console.log(tasks);

    tasks.forEach((task)=>{
        // console.log(task);

        const item = task.firstChild.textContent.toLowerCase();
        // console.log(item);

        if(item.indexOf(inputfilter) !== -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }

        // (or)

        // if(item.indexOf(inputfilter) === -1){
        //     task.style.display = "none";
        // }else{
        //     task.style.display = "block";
        // }
    });

}


// Event Listener
// Add Task
form.addEventListener('submit',addtask);

// Remove Task
tasklist.addEventListener('click',removetask);

// Clear Task
clearbtn.addEventListener('click',cleartask);

document.addEventListener('DOMContentLoaded',gettasks);

filter.addEventListener('keyup',filtertask);

// 16L1TL WDF


