import React, { Component } from 'react';
import {auth} from './firebase/firebase';
//import logo from './logo.svg';
//import logo from './money_off.svg'
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route } from "react-router-dom";

// const App = () => (
//   <div className="App">

//       <BrowserRouter>
//         <Route render={ props => <Home  {...props} />}  />
//       </BrowserRouter>

//   </div>
// )

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route render={props => <Home  {...props} authUser={this.state.authUser} />} />
        </BrowserRouter>
      </div>)
  }

}


export default App;
