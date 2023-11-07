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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
