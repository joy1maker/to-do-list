import "./tasks-viewer.styles.css"
import Task from "../task/task.component";
import { deleteTask } from "../task.utils";
const TasksViewer = ({ tasks, setTasks }) => {

    const colors = ["rgb(16, 103, 225)", "rgb(0, 177, 15)", "rgb(159, 220, 6)", "rgb(210, 106, 2)"];




    const onTaskClick = (id) => {
        let taskStatus = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            else {
                return task;
            }
        })
        setTasks(taskStatus);
    }
    const onDeleteTask = (id) => {
        let newTasks = deleteTask(id, tasks);
        setTasks(newTasks);
    }

    return (
        <div className="tasks-dashboard">
            {
                tasks.map((task, idx) => (

                    <Task key={idx} task={task} color={colors[idx % 4]} onTaskClick={onTaskClick} deleteTask={onDeleteTask} />


                ))
            }
        </div>
    )
};
export default TasksViewer