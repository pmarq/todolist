import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputText, setInputText]  = useState('X');



  return (
    <div className="App">
  
        <div className='todoInputContainer'> 
    
          <input 
            className='todoInput' 
            placeholder='add tarefa' 
            onChange={(event)=> {               
              setInputText(event.target.value)
            }}
          />


          <button
           className='addBtn'
           onClick={()=>{
  
             

           }}
           > 
          + 
          </button>        


  
        </div>

    </div>
  );
}

export default App;
