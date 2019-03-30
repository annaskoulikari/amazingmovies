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
import Login from "./components/Login";
import Register from "./components/Register";

import { loadUser } from "./actions/authActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    let requestToken = sessionStorage.getItem("requestToken");
    let path = "https://www.themoviedb.org/authenticate/" + requestToken;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div>Hello</div>
            <Header />
            {/* <Route
              path="/login"
              component={() =>
                (window.location = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/`)
              }
            /> */}
            <Route exact path="/" component={Home} />
            <Route path="/listPage" component={ListPage} />
            <Route path="/detailPage" component={DetailPage} />
            <Route path="/searchMovies" component={SearchMovies} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
