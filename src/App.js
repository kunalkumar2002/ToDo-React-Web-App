import './App.css';
import InputBar from './InputBar';
import { useState , useEffect } from 'react';
import TodoList from './ListofTodo';

// import FetchTodo from './list';


function App() {

  let [state , setState] = useState(``);
  let [item ,setItem] = useState([]);

  useEffect(() => {
    fetchTodo();
  },[])

  const fetchTodo = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
      const task = await response.json();
      setItem(task);
      console.log(task)
    } catch (error) {
      console.log('error inn fetching Todo :' , error);
    }
  }

  function handleInputKeyBord(e){
    state = e.target.value;
    setState(state);

    if(e.key === 'Enter'){
      console.log('hello')
      setItem((prev) => {
        return [...prev , state];
      })
      setState(``)
    }
    

  }

  function handleClick(e){

    // console.log(e.target.id)
    if(e.target.id === '+'){
      
      setItem((prev) => {
        return [...prev , state];
      })
    }

    setState(``)

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
        />
        <TodoList  
          state={item}
          handleDelete={handleDelete}
        />

        
        
      </div>
    </div>
  );
}

export default App;
