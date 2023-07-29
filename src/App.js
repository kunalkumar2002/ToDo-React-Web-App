import './App.css';
import InputBar from './InputBar';
import { useState } from 'react';

function App() {

  const [state , setState] = useState(``);

  function handleInputKeyBord(e){
    console.log(e.target.value)

  }

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo List</h1>
        <InputBar 
          state={state}
          setState = {setState}
          handleInputKeyBord = {handleInputKeyBord}
        />

        <ol>
          <li> hello </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
