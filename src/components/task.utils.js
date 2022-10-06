
export const deleteTask = (id, tasks) => {
    let newTasks = tasks.filter((task) => {
        return task.id !== id;
    })
    return newTasks;
}
export const toggleTask = (id, tasks) => {
    let taskStatus = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, done: !task.done };
        }
        else {
            return task;
        }
    })
    return taskStatus;
}