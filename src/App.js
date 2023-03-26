import logo from './logo.svg';
import './App.css';
import './components/TodoForm.css'
import TodoForm from './components/TodoForm';

function App() {
  return (
    
    <div className="App">
       <div>
         <h1 className='Header'>Whats the plan for today? </h1>
       </div>
     <TodoForm/>
    </div>
  );
}

export default App;