import React from 'react';
//import logo from './logo.svg';
import logo from './money_off.svg'
import './App.css';
import Home from './components/Home'
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
      <Home/>
      </div>
)
export default App;
