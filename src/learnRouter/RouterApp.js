
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink,  } from 'react-router-dom';
import ToDo from '../ToDo';
import About from './About';
import Contact from './Contact';
import Users from  "./Users";
import NotFound from  "./NotFound";


class RouterApp extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn :false
    }
  }
  
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome :)</h2>
          
          <ul>
            <li><NavLink  to={'/todo'} activeStyle={{color:'blue'}}>ToDo</NavLink></li>
            <li><NavLink to={'/contact'} activeStyle={{color:'blue'}}>Contact</NavLink></li>
            <li><NavLink to={'/about'} activeStyle={{color:'blue'}}>About</NavLink></li>
            <li><NavLink to={'/users'} activeStyle={{color:'blue'}}>Users</NavLink></li>
          </ul>
          
       
          <Switch>
              <Route exact path='/todo' component={ToDo} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/users' component={Users} />
              <Route component={NotFound}  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouterApp;