import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCategory from './containers/AddCategory'
import CategoryList from './containers/CategoryList'
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
        <AddCategory/>
        <CategoryList/>
      </div>
)
export default App;
