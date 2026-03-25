import {useState} from 'react';
import MoveTasks from './components/MoveTasks.jsx'
import TaskHeader from'./components/TaskHeader.jsx';
import TaskInput  from './components/TaskInput.jsx';
import TaskLabels from'./components/TaskLabels.jsx';
import TasksContainer from './components/TasksContainer.jsx';
function ToDoList(){

    const [taskInput,setTaskInput]=useState('');
    const [tasks,setTasks]=useState([]);
    const [emptyTaskError,setEmptyTaskError]=useState('');
    const [displayError,setDisplayError]=useState(false);
    const [markedTask,setMarkedTask]=useState({});
    const [taskLabels,setTaskLabels]=useState(false);

   const  addTask=()=>{
        if(taskInput.trim()!==""){
            setTaskLabels(true);
            const newTask=taskInput;
            setTasks(t=>[...t,newTask]);
            setTaskInput('');
            setDisplayError(false);
        }else{
            setEmptyTaskError("Please enter a task");
            setDisplayError(true);
        }
    }

    function checkIfTaskArrayIsEmpty(){
        if(tasks.length===1){
            setTaskLabels(false)
        }
    }

    const checkTaskContent=(e)=>{

        const taskText=e.target.value;
        if(taskText.trim()!==""){
            setTaskInput(taskText);
            setDisplayError(false);
        }else{
            setTaskInput('');
            setDisplayError(true);
            setEmptyTaskError("Please enter a task");
        }
    }

    const removeTask=(index)=>{
        const updatedArr=tasks.filter((_,i)=>index!==i);
        setTasks(updatedArr);
        checkIfTaskArrayIsEmpty();
    }

    const setTaskAsChecked=(index)=>{
        setMarkedTask(m=>({
            ...m,
            [index]:!m[index]
        }));

    }

    const moveDivUp=(index)=>{
        console.log(index);
        if(index>0){
            const newTasks=[...tasks];
            [newTasks[index-1],newTasks[index]]=[newTasks[index],newTasks[index-1]];
            setTasks(newTasks);
        }
        console.log(tasks);
    }

    return(
        <>
        <TaskHeader/>
        <main>
            <TaskInput taskInput={taskInput}
            displayError={displayError}
            emptyTaskError={emptyTaskError}
            addTask={addTask}
            checkTaskContent={(e)=>checkTaskContent(e)}/>
            <TaskLabels taskLabels={taskLabels}/>
            <TasksContainer markedTask={markedTask}
            tasks={tasks}
            removeTask={removeTask}
            setTaskAsChecked={setTaskAsChecked}
            moveDivUp={moveDivUp}/>
        </main>

        </>
    )
}

export default ToDoList;