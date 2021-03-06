import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from "./components/Home";
import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";
import Header from "./components/Header";
import SearchMovies from "./components/SearchMovies";
import Login from "./components/Login";
import Register from "./components/Register";
import Favourites from "./components/Favourites";
import { loadUser } from "./actions/authActions";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFilm,
  faTv,
  faUsers,
  faArrowLeft,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

library.add(faFilm, faTv, faUsers, faArrowLeft, faHeart);

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="sticky">
              <Header />
            </div>
            <div style={{ marginTop: 56 }}>
              <Route exact path="/" component={Home} />
              <Route path="/listPage" component={ListPage} />
              <Route path="/searchMovies" component={SearchMovies} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/favourites" component={Favourites} />
              <Route path="/detailPage" component={DetailPage} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
