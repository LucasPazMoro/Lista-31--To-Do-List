import { useEffect, useState } from 'react';
import './App.css';


function App() {
let [lista, setLista] = useState([]);
let [novoItem, setNovoItem] = useState("");

useEffect(() => {
  setLista(["Tarefa 1", "Tarefa 2", "Tarefa 3","Tarefa 4"]);
}, []);
  
  

  return (
    <div className="container">
        <h1>Lista de tarefas</h1>
      <div className='new-item'>
          <input placeholder="Tarefa" value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"></input>
          <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      </div>
      <ul className='todo-list'>
        {lista.map((item, index) => (
          <li key={index} className='todo-item'>
            {item}
            <button onClick={() => deletarItem(index)}>Deletar</button>
            </li>
          ))} 
      </ul>
    </div>
  );
  
  function adicionarNovoItem() {
    if(novoItem.length <= 0) {
      alert("Por favor, digite algo no campo 'tarefa'");
      return;
    }
    
    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Você já adicionou essa 'tarefa'");
      setNovoItem("");
      return;
    }

      setLista([...lista, novoItem])
      setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1)
    setLista(tmpArray)
  }
    
  
}

export default App;
