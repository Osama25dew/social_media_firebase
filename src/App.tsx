import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import Menubar from './components/Menubar';

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
