import MoveTasks from "./MoveTasks"

function TasksContainer({markedTask,tasks,removeTask,setTaskAsChecked,moveDivUp}){
    return(
        <div className='tasks-container'>
            {tasks.map((task,index)=>
                    <div className={markedTask[index]?'checked-task':'task-item' } key={index}>
                        <div className='task-text' >
                            <span className='text'>{task}</span>
                            <span className='delete-edit-buttons'>
                                <i className="fa-solid fa-trash" title='delete task' onClick={()=>{removeTask(index)
                                }}></i>
                                <i className="fa-solid fa-pen-to-square" title='edit task'></i>
                            </span>
                        </div>
                        <span className='checkbox-container'>
                            <input type='checkbox' onChange={e=>setTaskAsChecked(index)}/>
                        </span>
                        <MoveTasks moveDivUp={moveDivUp} index={index}/>
                    </div>
            )}
              </div>
    )
}

export default TasksContainer