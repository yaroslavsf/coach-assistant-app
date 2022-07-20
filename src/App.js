import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {Navbar} from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
      <h1>Coach assistant</h1>
      <h2>Regulation system of trainings</h2>
      <hr/>
      <Navbar>
        <Routes>
          {/* TODO */}
        </Routes>
      </Navbar>
      </Router>
    </div>
    
  );
}

export default App;
