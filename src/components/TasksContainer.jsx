import MoveTasks from "./MoveTasks"
import {useState} from 'react'
function TasksContainer({markedTask,tasks,removeTask,setTaskAsChecked,moveDivUp,disabledButton
    ,disableDownButton,moveDivDown,editing,handleEditing,replaceTask}){
     const [editInput,setEditInput]=useState('');
    return(
        <div className='tasks-container'>
            {tasks.map((task,index)=>
                    <div className='task-item' key={index} style={markedTask[index]?{position:"relative"}:{textDecoration:"none"}}>

                        <div className='task-text' >
                            {!editing[index]?<span className='text'><p>{task}</p></span>:
                            !markedTask[index]?<textarea defaultValue={task}  className="edit-input"
                            onChange={e=>setEditInput(e.target.value)} onKeyUp={e=>{
                                if(e.key==='Enter'){
                                    replaceTask(index,editInput)
                                    handleEditing(index,false)
                                }
                            }} ></textarea>:<p>{task}</p>}
                            <span className='delete-edit-buttons'>
                                <i className="fa-solid fa-trash" title='delete task' onClick={()=>{removeTask(index)
                                }}></i>
                                {!markedTask[index]?<i className="fa-solid fa-pen-to-square" title='edit task'
                                onClick={()=>handleEditing(index,true)}></i>:""}
                            </span>
                        </div>
                        <span className='checkbox-container'>
                            {!markedTask[index]?<input type='checkbox' onChange={()=>setTaskAsChecked(index)}/>:""}
                        </span>
                        <MoveTasks moveDivUp={moveDivUp} index={index}
                        disabledButton={disabledButton}
                        disableDownButton={disableDownButton}
                        moveDivDown={moveDivDown}
                        markedTask={markedTask}/>
                        {markedTask[index] && (
                        <div style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: "50%",
                          height: "5px",
                          background: "black",
                          pointerEvents: "none"
                        }}></div>
  )}
                    </div>
            )}
              </div>
    )
}

export default TasksContainer