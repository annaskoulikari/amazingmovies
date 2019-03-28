import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";

import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div>Hello</div>
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
