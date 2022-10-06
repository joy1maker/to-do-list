import "./task-input.styles.css"

const TaskInput = ({ addTask, value }) => (

    <input type="text" placeholder="add task" className="add-task" onKeyDown={addTask} onChange={addTask} value={value} />

)
export default TaskInput;