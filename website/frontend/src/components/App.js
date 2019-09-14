import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components

import Header from "./layout/Header";
import Post from "./layout/Post";
import Blog from "./layout/Blog";
import NotFound from "./layout/NotFound";
import Mainpage from "./layout/Mainpage";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:postId" component={Post} />
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
