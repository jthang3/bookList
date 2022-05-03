import Nav from './components/Nav';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Home />
      </Router>
    </div>
  );
}

export default App;
