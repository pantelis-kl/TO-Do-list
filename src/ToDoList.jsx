import {useState,useEffect} from 'react';
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
    const [disabledButton,setDisabledButton]=useState({});
    const [disableDownButton,setDisabledDownButton]=useState({});
    const [markedIndex,setMarkedIndex]=useState([]);
    const [editing,setEditing]=useState({});

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

        disableMoveButtons();

    }

    const replaceTask=(index,editTask)=>{
        setTasks(tasks.filter((_,i)=>index!==i));
        setTasks(t=>([
            ...t,
            [index]=editTask
        ]));
        console.log(tasks);
    }

    function disableMoveButtons(){
        setDisabledButton(d=>({
                ...d,
                [0]:true
            }))

            setDisabledDownButton(d=>({
                ...d=false,
                [tasks.length]:true
            }))
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
        disableMoveButtons();
        checkIfTaskArrayIsEmpty();
        resetMarkedIndex(index);
        setEditing(e=>({
            ...e,
            [index]:false,
        }))
    }

    function resetMarkedIndex(index){
        if(index===markedIndex[index]){
            setMarkedTask(m=>({
                ...m,
                [index]:false
            }))
        }
    }

    const setTaskAsChecked=(index)=>{
        setMarkedTask(m=>({
            ...m,
            [index]:!m[index]
        }));
        setMarkedIndex(m=>({
            ...m,
            [index]:index
        }));
        console.log(markedIndex)
    }

    const moveDivUp=(index)=>{
        setEditing(e=>({
            ...e,
            [index]:false,
            [index-1]:false 
        }))
        if(index>0){
            const newTasks=[...tasks];
            [newTasks[index-1],newTasks[index]]=[newTasks[index],newTasks[index-1]];
            setTasks(newTasks);
            setMarkedTask(m => ({
      ...m,
      [index]: m[index - 1],
      [index - 1]: m[index]
    }));
        }
    }

    const moveDivDown=(index)=>{
        setEditing(e=>({
            ...e,
            [index]:false,
            [index+1]:false 
        }))
        if(index<tasks.length){
            const newTasks=[...tasks];
            [newTasks[index+1],newTasks[index]]=[newTasks[index],newTasks[index+1]];
            setTasks(newTasks);
             setMarkedTask(m => ({
      ...m,
      [index]: m[index + 1],
      [index + 1]: m[index]
    }));
        }
    }

    const handleEditing=(index,flag)=>{
        setEditing(e=>({
            ...e,
            [index]:flag
        }))
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
            moveDivUp={moveDivUp}
            disabledButton={disabledButton}
            disableDownButton={disableDownButton}
            moveDivDown={moveDivDown}
            markedIndex={markedIndex}
            editing={editing}
            handleEditing={handleEditing}
            replaceTask={replaceTask}/>
        </main>

        </>
    )
}

export default ToDoList;