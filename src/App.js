import React, { Component } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Forms from "./Forms";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import {BrowserRouter, Route, Switch} from 'react-router-dom';



export default class App extends Component {
 

  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/Forms" component = {Forms}/>
        <Route path="/LogIn" component = {LogIn}/>
        <Route path="/SignUp" component = {SignUp}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
