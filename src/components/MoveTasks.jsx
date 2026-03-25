
function MoveTasks({moveDivUp,index}){
    return(<>
        <i className="fa-solid fa-chevron-up" 
        onClick={()=>moveDivUp(index)}></i>
    </>)
}

export default MoveTasks;