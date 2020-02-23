import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Level1 from "./pages/Level1/Level1";
import InputL2 from "./pages/Level2/InputL2";
import InputL3 from "./pages/Level3/InputList";
import InputL4 from "./pages/Level4/InputL4";
import InputL5 from "./pages/Level5/InputList";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/level1" component={Level1} />
          <Route path="/level2" component={InputL2} />
          <Route path="/level3" component={InputL3} />
          <Route path="/level4" component={InputL4} />
          <Route path="/level5" component={InputL5} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
