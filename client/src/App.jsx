import { Routes, Route } from "react-router-dom";
import { Cards, Card } from "./components/index"

import './App.css'

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/videogames/:id' element={<Card />} />
      </Routes>

    </div>
  );
}

export default App
