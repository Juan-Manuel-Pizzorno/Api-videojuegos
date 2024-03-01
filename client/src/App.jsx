import {Routes,Route} from "react-router-dom";
import Cards from "./components/Cards/Cards"

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Cards/>} />
      </Routes>

      </div>
  );
}

export default App
