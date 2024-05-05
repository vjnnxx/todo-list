import Task from "./Task";
import loadContent from "./loadContent";

function createTask(){
    // title - description - priotiry - dueDate - project
    const title = document.querySelector('#title').value;

    const description = document.querySelector('#description').value;

    const priority = document.querySelector('#priority').value;

    const duedate = document.querySelector('#duedate').value;

    if(title == '' || description == '' || priority == '' || duedate == ''){
        const warning = document.querySelector('#warning-text');
        warning.textContent = 'Preencha todos os campos!';
        return
    } 

    const toDo = new Task(title, description, priority, duedate);

    let todoJSON = JSON.stringify(toDo);

    if(!localStorage.getItem("tasks")){
        let array = [];
        array.push(todoJSON)
        localStorage.setItem("tasks", JSON.stringify(array));
    } else {
        const item = JSON.parse(localStorage.getItem("tasks"));
        item.push(todoJSON)
        console.log(item)
        localStorage.setItem("tasks", JSON.stringify(item))
    }

    const modal = document.querySelector('.modal');
    modal.style.display = 'none';

    const form = document.querySelector('#form');
    form.reset();

    const content = document.querySelector('.main-content');
    content.innerHTML = '';
    loadContent();

    return

     
};

export default createTask;