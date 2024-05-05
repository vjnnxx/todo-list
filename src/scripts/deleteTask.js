import loadContent from "./loadContent";

function deleteTask(cardId){
    const card = document.querySelector(`#card${cardId}`);
    card.remove();

    const tasks = localStorage.getItem("tasks");

    let tasksJson = JSON.parse(tasks);

    delete tasksJson[cardId];

    const newArray = tasksJson.filter((element)=>{
        return element != undefined
    });

    localStorage.setItem('tasks', JSON.stringify(newArray));

    const content = document.querySelector('.main-content');
    content.innerHTML = '';
    loadContent();

    
};

export default deleteTask;