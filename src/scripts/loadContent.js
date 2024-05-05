import Trash from '../icons/trash-can-outline.svg';
import deleteTask from './deleteTask';

function loadContent(){

    if(!localStorage.getItem("tasks")) return;

    const tasks = localStorage.getItem("tasks");

    const content = document.querySelector('.main-content');

    let tasksJson = JSON.parse(tasks);

    const cards = document.createElement('div');
    cards.classList.toggle('card-container')

    const priorityOrder = ['Baixa', 'Média', 'Alta'];

    let idCounter = 0;

    tasksJson.forEach(element => {
        const task = JSON.parse(element);

        const div = document.createElement('div');

        div.dataset.id = idCounter;

        div.classList.toggle('task-card');
        
        let title = document.createElement('p');
        title.textContent = "Título: " + task.title;
        div.appendChild(title);

        let description = document.createElement('p');
        description.textContent = "Descrição: " + task.description;
        div.appendChild(description);

        let priority = document.createElement('p');
        priority.textContent = "Prioridade: "+ priorityOrder[task.priority - 1];
        div.appendChild(priority);

        let dueDate = document.createElement('p');
        dueDate.textContent = "Prazo: " + task.dueDate;
        div.appendChild(dueDate);


        const trashIcon = new Image();
        trashIcon.src = Trash;
        trashIcon.classList.toggle('delete-icon');

        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', ()=>{
            let cardId = div.dataset.id;
            deleteTask(cardId);
        });
        deleteButton.appendChild(trashIcon);

        div.id = 'card' + idCounter;

        div.appendChild(deleteButton);

        cards.appendChild(div);

        idCounter++;   
    });

    content.appendChild(cards);
}

export default loadContent;