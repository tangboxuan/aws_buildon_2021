import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';

// import NavBar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
class App extends React.Component {
    render() {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route path='/' component={Home} exact />
            </Switch>
          </Router>

        </div>
    )};
}

export default App;
