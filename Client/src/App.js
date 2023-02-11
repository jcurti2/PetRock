import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import RockOwner from './pages/RockOwner'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page2' element={<RockOwner/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
