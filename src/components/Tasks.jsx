import Task from "./Task"

function Tasks({tasks, onDelete, onToggle}) {
function onClick() {
    console.log("Hello but")
}

  return (
    <div>
        {tasks.map((task) => {
            return <Task onToggle={onToggle} onDelete={onDelete} key={task.id} task={task} />
        })}
        
    </div>
  )
}

export default Tasks;
