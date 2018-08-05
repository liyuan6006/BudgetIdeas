import React from 'react';
//import logo from './logo.svg';
//import logo from './money_off.svg'
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <div className="App">

      <BrowserRouter>
        <Route render={ props => <Home  {...props} />}  />
      </BrowserRouter>

  </div>
)
export default App;
