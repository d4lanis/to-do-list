const task = document.querySelector('#task');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const div = document.querySelector('#addBtn');
const addTask = document.querySelector('#add');
let tasks = document.querySelectorAll('div.visually-hidden');


const allTasks = document.querySelector('#allTasks');
const activeTasks = document.querySelector('#activeTasks');
const completedTasks = document.querySelector('#completedTasks');

addTask.addEventListener('click',function (){
    const text = task.value;
    const elementHTML = 
    `<div class="tasks form-group row">
        <div class="form-group col">
            <div class="form-control justify-content">
                <input type="checkbox" class="form-check-input">
                ${text.toUpperCase()}
            </div>
        </div>`;

    if(text){
        div.insertAdjacentHTML('beforebegin',elementHTML);
        task.value = null;
        task.focus();
        tasks = document.querySelectorAll('div.visually-hidden');
        console.log(tasks);
    }
    else{
        alert('No se ha escrito una tarea para agregarla');
    }
});

allTasks.addEventListener('click', function (){
    tasks = document.querySelectorAll('div.visually-hidden');
    tasks.forEach(el =>{
        console.log(el);
        el.classList.remove('visually-hidden');
    });
});

activeTasks.addEventListener('click', function (){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(el =>{
        if(el.checked){
            let checkbox = el.closest('div div div.tasks');
            checkbox.classList.add('visually-hidden');
        }
    });
});

completedTasks.addEventListener('click', function (){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(el =>{
        if(!el.checked){
            let checkbox = el.closest('div div div.tasks');
            checkbox.classList.add('visually-hidden');
        }
    });
});