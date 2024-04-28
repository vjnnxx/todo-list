import toDo from './scripts/toDo';

import createProject from './scripts/project';

let task1 = new toDo('Projeto final', 'Trabalho de conclusão de curso', 1, '09-05-2024');

const project = createProject();

project.addTask(task1);

console.log(project.getTasks())
