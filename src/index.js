import toDo from './scripts/toDo';
import createProject from './scripts/project';
import loadTopSection from './scripts/loadTopSection';
import loadTaskSection from './scripts/loadTaskSection';
import marcyIcon from './icons/marcy.jpg';
import notifyIcon from './icons/bell-ring.svg';
import plusIcon from './icons/plus-circle-outline.svg';
import styles from './style.css';

loadTopSection(marcyIcon, notifyIcon);

loadTaskSection(plusIcon);


// let task1 = new toDo('Projeto final', 'Trabalho de conclusão de curso', 1, '09-05-2024');

// const project = createProject('Projeto Padrão');

// project.addTask(task1);

// const divToDo = document.createElement('div');

// const divProject = document.createElement('div');

// const projectTitle = document.createElement('p');

// divProject.appendChild(projectTitle);

// projectTitle.textContent = `${project.getTitle()}`;

// divToDo.classList.toggle('testando');

// const toDos = project.getTasks();

// toDos.forEach(toDo => {
//     divToDo.innerHTML += `
//     <p> ${toDo.title} </p>
//     <p> ${toDo.dueDate} </p>
//     <p> ${toDo.description} </p>
//     <p> ${toDo.isComplete} </p>
//     <p> ${toDo.priority} </p>
// `;   
// });



// divProject.appendChild(divToDo);

// document.body.appendChild(divProject)