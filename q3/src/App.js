import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Input from "./pages/Level1/InputSpan";
import InputList from "./pages/Level2/InputList";
import AdvInput from "./pages/Level3/AdvInput";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/level1" component={Input} />
          <Route path="/level2" component={InputList} />
          <Route path="/level3" component={AdvInput} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
