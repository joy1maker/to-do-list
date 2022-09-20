import "./task.styles.css"
import { motion } from "framer-motion";
const Task = (props) => {
    const { id, content, done } = props.task;
    const color = props.color;


    return (

        < motion.div className="task"
            key="task-anmation"
            style={{ background: color }}
            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "-50%", opacity: 0, scale: 0 }}
            transition={{ duration: 0.4 }}
        >
            <span className="content"
                style={{
                    textDecorationLine: done ? "line-through" : "none",
                    textDecorationColor: "black"
                }}
                onClick={() => props.onTaskClick(id)}
            >
                {content}
            </span>
            <span className="remove-button" onClick={() => props.deleteTask(id)}>&#10005;</span>
        </motion.div>

    )
}

export default Task;