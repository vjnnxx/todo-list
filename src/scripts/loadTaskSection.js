import showTaskForm from './showTaskForm';

function loadTaskSection(plusIcon){
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.toggle('addTask');
    addTaskButton.addEventListener('click', showTaskForm);

    const plusImage = new Image();
    plusImage.src = plusIcon;

    const addTaskText = document.createElement('p');
    addTaskText.textContent = 'Nova tarefa';

    addTaskButton.appendChild(plusImage);
    addTaskButton.appendChild(addTaskText);
    const taskSection = document.querySelector('.tasks-section');
    taskSection.appendChild(addTaskButton);

}

export default loadTaskSection;