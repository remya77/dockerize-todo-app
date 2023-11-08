import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const backend = "http://localhost:3001"

const getTodos = async () => {
  let todos = await axios({
    method: 'get',
    url: `${backend}/api/todos`,
    responseType: 'json'
  })
  console.log(todos)      
}

function App() {
  getTodos()

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
