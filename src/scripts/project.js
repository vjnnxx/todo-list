function createProject(title){
    const tasks = [];

    const projectTitle = title;

    const addTask = (Task) =>{
        tasks.push(Task);
    };

    const getTitle = () => projectTitle;

    const getTasks = () => tasks;
    
    return {addTask, getTasks, getTitle}
}

export default createProject;