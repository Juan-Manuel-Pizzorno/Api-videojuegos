import { Routes, Route } from "react-router-dom";
import { Cards, CardDetaild, Navbar } from "./components/index"

import './App.css'

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/videogames/:id' element={<CardDetaild />} />
      </Routes>

    </div>
  );
}

export default App
