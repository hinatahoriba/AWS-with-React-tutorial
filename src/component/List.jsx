import React from 'react'

function List({taskList, setTaskList}) {

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const handleCompleted = (id) => {
    setTaskList(taskList.map( (task) => {
      if (id === task.id){
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    }))
  }

  return (
    <div className='List'>
      <div className="todos">
        {taskList.map((task, index) => (
          <div className={`todo ${task.completed ? "completed" : ""}`} key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => handleCompleted(task.id)}>✔</button>
            <button onClick = {() => handleDelete(task.id)}>ー</button>
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
