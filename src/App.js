import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"; // add
import RaisedButton from "material-ui/RaisedButton"; // add
import SimpleComponent from "./components/simple-component";
import logo from "./logo.svg";
import "./App.css";
import SampleChart from "./components/sample-chart";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <SimpleComponent />
          <SampleChart />

          <RaisedButton label="Material UI" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
