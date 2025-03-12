import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Orders from './Orders.js';
import Pagenotfound from './Pagenotfound.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact /> 
          <Route path='/orders' element={<Orders/>} exact />
          <Route path = '*' element = {<Pagenotfound />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
