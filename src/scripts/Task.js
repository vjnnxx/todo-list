class Task {
    constructor(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isComplete = false;
    }

    set newPriority(newPriority){
        this.priority = newPriority;
    }
    
    get getPriority (){
        return this.priority;
    }
}

export default Task;