import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import './components/List/List.css'

function Header(){
   return (
      <div className = "Header">
        Hope you had a productive day!
      </div>
   );
}
function App() {
  return (
    <div className="App">
      <Header />
      <List></List>
    </div>
  );
}

export default App;
