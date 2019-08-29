import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from "./About";
import Repos from "./Repos";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/repos" component={Repos}/>
                <Route render={() => (<div>No match</div>)}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}
