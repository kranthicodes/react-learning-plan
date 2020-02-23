import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ParentClass from "./pages/Level1/ParentClass";
import Parent from "./pages/Level2/Parent";
import Parent3 from "./pages/Level3/Parent";
import Parent4 from "./pages/Level4/Parent";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/level1" component={ParentClass} />
          <Route path="/level2" component={Parent} />
          <Route path="/level3" component={Parent3} />
          <Route path="/level4" component={Parent4} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
