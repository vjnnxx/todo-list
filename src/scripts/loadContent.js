function loadContent(){

    if(!localStorage.getItem("tasks")) return;

    const tasks = localStorage.getItem("tasks");

    const content = document.querySelector('.content');

    let tasksJson = JSON.parse(tasks);

    console.log(tasksJson)

    // title - description - priotiry - dueDate - project

    const cards = document.createElement('div');
    cards.classList.toggle('card-container')

    tasksJson.forEach(element => {
        const task = JSON.parse(element);

        const div = document.createElement('div');

        div.classList.toggle('task-card');
        
        let title = document.createElement('p');
        title.textContent = "Título: " + task.title;
        div.appendChild(title);

        let description = document.createElement('p');
        description.textContent = "Descrição: " + task.description;
        div.appendChild(description);

        let priority = document.createElement('p');
        priority.textContent = "Prioridade: "+ task.priority;
        div.appendChild(priority);

        let dueDate = document.createElement('p');
        dueDate.textContent = "Prazo: " + task.dueDate;
        div.appendChild(dueDate);

        cards.appendChild(div);
        
    });

    content.appendChild(cards);




}

export default loadContent;