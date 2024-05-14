import './App.css';
import { Routes, Route } from 'react-router-dom'
import AlexDrake from './alexdrake';
import Home from './home';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alexDrake" element={<AlexDrake />}/>
     </Routes>
    </div>
  );
}

export default App;
