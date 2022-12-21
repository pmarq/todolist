import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const [todoList, setTodoList] = useState([]);

  console.log("todoList: ", todoList);

  return (
    <div className="App">
      <div className="todoInputContainer">
        <input
          className="todoInput"
          placeholder="add tarefa"
          value={inputText}
          onChange={(event) => {
            const textoDigitado = event.target.value;
            setInputText(textoDigitado);
          }}
        />

        <button
          className="addBtn"
          onClick={() => {
            setTodoList([...todoList, { id: inputText, text: inputText }]);
            setInputText("");
          }}
        >
          +
        </button>
      </div>

      {/* onde cliquei = 'leite'
      todoList  = ['leite', 'arroz', 'pao']; */}

      <div className="todoListContainer">
        {todoList.map((toDo, idx) => {
           
          return (
            <div className="toDo">
              {toDo.id} --- {toDo.text}
              <button onClick={() => {

              const filteredToDoList  = todoList?.filter(x => x.id !== toDo.id);
              console.log('filteredToDoList: ', filteredToDoList);
              //setTodoList(filteredToDoList)            
                
              }}> X </button>
            </div>
          );


        })}
      </div>
    </div>
  );
}

export default App;
