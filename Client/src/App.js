import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import RockOwner from './pages/RockOwner'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page2' element={<RockOwner/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
