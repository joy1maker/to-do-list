import "./task-input.styles.css"

const TaskInput = ({ addTask, value }) => (
    <div>
        <input type="text" placeholder="add task" className="add-task" onKeyDown={addTask} onChange={addTask} value={value} />
    </div>
)
export default TaskInput;