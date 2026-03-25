function TaskInput({taskInput,displayError,emptyTaskError,addTask,checkTaskContent}){
    return(
        <div className="add-container">
                <label htmlFor="text">Add a task</label>
                <textarea htmlFor="text" 
                value={taskInput}  
                onChange={e=>checkTaskContent(e)}
                onKeyUp={
                    e=>{
                        if(e.key==='Enter')
                           addTask()
                    }
                }></textarea>
                <p className='error-message'>{displayError?emptyTaskError:""}</p>
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
    )
}

export default TaskInput;