import List from './List'
import './App.css';

function App() {

  return (
    <div className="App">
      <h3>Anser to Question 1 of 3</h3> 
      <p>please refresh pg before you begin</p>
      <List items = {["A","B","C"]}/>
    </div>
  );
}

export default App;
