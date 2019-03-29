import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";

import Home from "./components/Home";
import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";
import Header from "./components/Header";
import SearchMovies from "./components/SearchMovies";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div>Hello</div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/listPage" component={ListPage} />
            <Route path="/detailPage" component={DetailPage} />
            <Route path="/searchMovies" component={SearchMovies} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
