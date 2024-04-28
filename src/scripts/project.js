function createProject(){
    const tasks = [];

    const addTask = (toDo) =>{
        tasks.push(toDo);
    };

    const getTasks = () => tasks;
    
    return {addTask, getTasks}
}

export default createProject;