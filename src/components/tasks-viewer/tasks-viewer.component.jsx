import "./tasks-viewer.styles.css"
import Task from "../task/task.component";
import { deleteTask } from "../task.utils";
import { AnimatePresence } from "framer-motion";
import { toggleTask } from "../task.utils";
const TasksViewer = ({ tasks, setTasks }) => {

    const colors = ["rgb(16, 103, 225)", "rgb(0, 177, 15)", "rgb(159, 220, 6)", "rgb(210, 106, 2)"];

    const onTaskClick = (id) => {
        setTasks(toggleTask(id, tasks));
    }
    const onDeleteTask = (id) => {
        setTasks(deleteTask(id, tasks));
    }

    return (
        <AnimatePresence>
            <div className="tasks-dashboard">
                {
                    tasks.map((task, idx) => (

                        <Task
                            key={idx} task={task}
                            color={colors[idx % 4]}
                            onTaskClick={onTaskClick}
                            deleteTask={onDeleteTask}
                        />


                    ))
                }
            </div>
        </AnimatePresence>
    )
};
export default TasksViewer