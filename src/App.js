import React, {useState} from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';

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
]) 

function deleteTask(id) {

  setTasks(tasks.filter((task) => {
      return (task.id !== id)
    }))
}

function onToggle (id) {
  console.log("show: ", id)
}

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle}/> : "No tasks to show"}
    </div>
  );
}



export default App;
