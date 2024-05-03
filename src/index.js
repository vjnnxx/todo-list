import Task from './scripts/Task';
import createProject from './scripts/project';
import loadTopSection from './scripts/loadTopSection';
import loadTaskSection from './scripts/loadTaskSection';
import loadContent from './scripts/loadContent';
import marcyIcon from './icons/marcy.jpg';
import notifyIcon from './icons/bell-ring.svg';
import plusIcon from './icons/plus-circle-outline.svg';
import styles from './style.css';

const modalForm = document.querySelector('.form-task');

modalForm.addEventListener('submit', (e)=>{
    e.preventDefault();
});


loadTopSection(marcyIcon, notifyIcon);

loadTaskSection(plusIcon);

loadContent();


// Adicionar cards a div content