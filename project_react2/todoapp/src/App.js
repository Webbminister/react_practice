
import './App.css';
import Tasks from './components/Task';
import Tasklists from './components/Tasklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Tasklists />
        < Tasks />
      </header>
    </div>
  );
}

export default App;
