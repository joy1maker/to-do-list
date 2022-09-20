import { useState } from 'react';
import TasksViewer from './components/tasks-viewer/tasks-viewer.component';
import TaskInput from './components/task-input/task-input.component';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const addTask = (e) => {
    if (e.key !== 'Enter') {
      setValue(e.target.value);
      return;
    }
    if (e.target.value === "") {
      return;
    }
    let content = e.target.value;
    let newTasksArray = tasks.map(
      (element, idx) => (
        {
          id: idx,
          content: element.content
        }
      )
    )
    newTasksArray = [...tasks, { id: tasks.length, content: content, done: false }]
    setValue("");
    setTasks(newTasksArray);
  }


  return (
    <div className="App">
      <div className='container'>
        <TaskInput addTask={addTask} value={value} />
        <TasksViewer tasks={tasks} setTasks={setTasks} />
      </div>

    </div>
  );
}

export default App;
