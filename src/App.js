import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import "./App.css";
import PostDetail from "./PostDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/shop/:id" component={PostDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
