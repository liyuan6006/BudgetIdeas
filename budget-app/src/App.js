import React from 'react';
//import logo from './logo.svg';
import logo from './money_off.svg'
import './App.css';
import Home from './components/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Beginning with v0.15.0, Material-UI components require a theme to be provided. The quickest way to get up and running is by using the MuiThemeProvider to inject the theme into your application context. 

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to BudgetIdeas</h1>
//         </header>
//        <br/>
//        <AddCategory/>
//         <CategoryList/>
//       </div>
//     );
//   }
// }


const App =()=>(
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BudgetIdeas</h1>
        </header>
      <br/>
      <MuiThemeProvider>
      <Home/>
      </MuiThemeProvider>
      </div>
)
export default App;
