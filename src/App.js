import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

import {UsersList} from './components/UsersList'
import {CreateUser} from './components/CreateUser'
import {ExercisesList} from './components/ExercisesList'
import {CreateExercise} from './components/CreateExercise'
import {EditExercise} from './components/EditExercise'
function App() {
  return (
    <div className="App">
      <Router>
        <nav><Navbar/></nav>
        <header><Header/></header>
        <main className='container'>
          <hr/>
          <div id='main-box'>
          <Routes>
            <Route path="/" element={<ExercisesList/>}/>
            <Route path="/user" element={<CreateUser/>}/>
            <Route path="/users" element={<UsersList/>}/>
            <Route path="/create" element={<CreateExercise/>}/>
            <Route path="/edit/:id" element={<EditExercise/>}/>
          </Routes>
          </div>
        </main>
        <footer><Footer/></footer>
      </Router>
    </div>
    
  );
}

export default App;
