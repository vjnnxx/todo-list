function createProject(title){
    const tasks = [];

    const projectTitle = title;

    const addTask = (toDo) =>{
        tasks.push(toDo);
    };

    const getTitle = () => projectTitle;

    const getTasks = () => tasks;
    
    return {addTask, getTasks, getTitle}
}

export default createProject;