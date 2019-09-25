import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Nav";
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login'
import AddItem from './components/AddItem'

// function App() {
//   return (
//     <div className="App">
//     <Navigation/>
//       <SignUp />
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Navigation/>
        <Router>
          <Switch>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/AddItem" component={AddItem}/>
          </Switch>
        </Router>

      </React.Fragment>
    )
  }
} 

export default App;
