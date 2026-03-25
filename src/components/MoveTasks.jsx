
function MoveTasks({moveDivUp,index,disabledButton,disableDownButton,moveDivDown,markedTask}){
    return(
    <div className="move-buttons-container">
        {!markedTask[index]?<i className={disabledButton[index]?"":"fa-solid fa-chevron-up"} 
        onClick={()=>moveDivUp(index)}></i>:""}
        {!markedTask[index]?<i className={disableDownButton[index]?"":"fa-solid fa-chevron-down"}
        onClick={()=>moveDivDown(index)}></i>:""}
    </div>
        
    )
}

export default MoveTasks;