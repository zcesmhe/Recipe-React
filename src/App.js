import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={Recipes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
