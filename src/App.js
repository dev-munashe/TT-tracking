import React, {useState} from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import Input from './components/Input';

function App(props) {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]);

const [showAddTask, setShowAddTask] = useState(false);

function deleteTask(id) {

  setTasks(tasks.filter((task) => {
      return (task.id !== id)
    }))
}

function onToggle (id) {
  console.log("show: ", id)
}

function handleSubmit(task) {
  debugger;
  const id = Math.floor(Math.random() * 1000)+1
  const newTask = {id, ...task};
  console.log(newTask);
  setTasks([...tasks, newTask]);
}

  return (
    <div className="container">
      <Header title="Task Tracker" handleClick={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <Input handleSubmit={handleSubmit} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle}/> : "No tasks to show"}
    </div>
  );
}



export default App;
