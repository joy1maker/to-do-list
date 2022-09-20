
export const deleteTask = (id, tasks) => {
    let newTasks = tasks.filter((task) => {
        return task.id !== id;
    })
    return newTasks;
}