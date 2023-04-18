import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Pagenotfound from './Pagenotfound';


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
