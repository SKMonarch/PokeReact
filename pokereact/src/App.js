import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokeLista from './components/PokeLista';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:id" element={<Pokemon />}/>
        <Route path="/" element={<PokeLista />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
