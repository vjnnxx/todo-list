import Task from "./Task";

function createTask(){
    // title - description - priotiry - dueDate - project
    const title = document.querySelector('#title').value;

    const description = document.querySelector('#description').value;

    const priority = document.querySelector('#priority').value;

    const duedate = document.querySelector('#duedate').value;

    const project = document.querySelector('#project').value;


    if(title == '' || description == '' || priority == '' || duedate == '') return "Vazio não tem como chefia";

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

    return

     
};

export default createTask;