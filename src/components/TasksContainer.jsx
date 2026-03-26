import MoveTasks from "./MoveTasks"
import {useState} from 'react'
function TasksContainer({markedTask,tasks,removeTask,setTaskAsChecked,moveDivUp,disabledButton
    ,disableDownButton,moveDivDown,editing,handleEditing,replaceTask}){
     const [editInput,setEditInput]=useState('');
     const [userType,setUserType]=useState({});
    return(
        <div className='tasks-container'>
            {tasks.map((task,index)=>
                    <div className='task-item' key={index} style={markedTask[index]?{position:"relative"}:{textDecoration:"none"}}>

                        <div className='task-text' >
                            {!editing[index]?<span className='text'><p>{task}</p></span>:
                            !markedTask[index]?<><textarea defaultValue={task}  className="edit-input"
                            onChange={e=>{setEditInput(e.target.value)
                                setUserType(t=>({...t,[index]:true}))
                            }} onKeyUp={e=>{
                                if(e.key==='Enter'){
                                    replaceTask(index,editInput)
                                    handleEditing(index,false)
                                }
                            }}>
                            </textarea><div className="edit-button-container"><button className="sumbit-button-on-edit"
                             onClick={()=>{
                                replaceTask(index, userType[index] ? editInput : task) 
                                handleEditing(index,false)
    
                            }}>Submit
                            </button></div></>
                            :<p>{task}</p>}
                            <span className='delete-edit-buttons'>
                                <i className="fa-solid fa-trash" title='delete task' onClick={()=>{removeTask(index)
                                }}></i>
                                {!markedTask[index]?<i className="fa-solid fa-pen-to-square" title='edit task'
                                onClick={()=>{handleEditing(index,true)
                                    setUserType(t=>({...t,[index]:false}))
                                }}></i>:""}
                            </span>
                        </div>
                        <span className='checkbox-container'>
                            {!markedTask[index]?<input type='checkbox' onChange={()=>setTaskAsChecked(index)}/>:
                            <h4 className="completed-header">Completed</h4>}
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
                          height: "2px",
                          width:"900px",
                          marginLeft:"-30px",
                          background: "black",
                          pointerEvents: "none",
                          borderRadius:"20px"
                        }}></div>
  )}
                    </div>
            )}
              </div>
    )
}

export default TasksContainer