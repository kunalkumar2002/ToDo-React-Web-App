import './App.css';
import InputBar from './InputBar';
import { useState , useEffect } from 'react';
import TodoList from './ListofTodo';

// import FetchTodo from './list';


function App() {

  let [state , setState] = useState(``);
  let [item ,setItem] = useState([]);
  let [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    fetchTodo();
  },[])

  const fetchTodo = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const task = await response.json();
      setItem(task);
      // console.log(task)
    } catch (error) {
      console.log('error inn fetching Todo :' , error);
    }
  }

  const handleAddTodo = async () => {
    if(state.trim() === ''){
      console.log('got nothing') ;
      return ;
    }

    const newTodo = {
      title: state,
      completed: false,
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos' , {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const addTask  = await response.json();
      setItem((prev) => [...prev , addTask]);
      setState(``)

    }catch (error) {
      console.log('Error adding task:', error);
    }
  }

  const handleUpdate = async () => {
    if (state.trim() === '') {
      return;
    }
    
    console.log('update')

    const updatedTask = {
      title: state,
      completed: false
    };

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${editTaskId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTask),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const updatedTaskData = await response.json();
      setItem((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTaskId ? { ...task, title: updatedTaskData.title } : task
        )
      );
      setState('');
      setEditTaskId(null);
      // toast.success('Task updated successfully');
    } catch (error) {
      console.log('Error updating task:', error);
      // toast.error('Error updating task');
    }
  }

  function handleInputKeyBord(e){
    // console.log(state)
    state = e.target.value;
    setState(state);

    if(e.key === 'Enter'){
      handleAddTodo();
    }

   
  }

  function handleClick() {

    // console.log(e.target.id)
    if(editTaskId){
      handleUpdate()
    }else{
      handleAddTodo()
    }

    // console.log(e.target.id)

    

  }

  function handleEditTask(e){
    // console.log(e)
    setEditTaskId(e);
    const taskeToEd = item.find((task) => task.id === e )
    setState(taskeToEd.title);
    // console.log(taskeToEd.title)
  }

  function handleDelete(e){
    // console.log(e)
    setItem((prev) => {
      return prev.filter((task , index) => {
        return index !== e;
      })
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo List</h1>
        <InputBar 
          state={state}
          // setState = {setState}
          handleInputKeyBord = {handleInputKeyBord}
          handleClick = {handleClick }
          editTaskId={editTaskId}
        />
        <TodoList  
          state={item}
          handleEditTask = {handleEditTask}
          handleDelete={handleDelete}
        />

        
        
      </div>
    </div>
  );
}

export default App;
