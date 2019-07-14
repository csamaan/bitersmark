import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Action from "./Action";
import RPGs from "./RPGs";
import Mobile from "./Mobile";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Biter's Mark Video Game Finds! (Named by Alucarda M.)</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/action">Action/Adventures (not limited to FPSes and horror games)</NavLink></li>
            <li><NavLink to="/rpgs">Role Playing Games</NavLink></li>
            <li><NavLink to="/mobile">Mobile Gaming</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/Action" component={Action}/>
            <Route path="/RPGs" component={RPGs}/>
            <Route path="/Mobile" component={Mobile}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;