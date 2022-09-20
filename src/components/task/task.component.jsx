import "./task.styles.css"

const Task = (props) => {
    const { id, content, done } = props.task;
    const color = props.color;


    return (
        <div className="task" style={{ background: color }}  >
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
        </div>
    )
}

export default Task;