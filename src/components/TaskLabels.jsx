function TaskLabels({taskLabels}){
    return(
        <>
        {taskLabels?
            <div className='task-labels'>
                    <h2>All Tasks</h2>
                    <h2 className='mark-as-completed-header'>Mark As Completed</h2>
                    <h2 className='move-up-header'>Move Up</h2>
                </div>
            :""}
        </>
    )
}

export default TaskLabels;