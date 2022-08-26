import React from "react";
import "./App.css";
import logo from "./logo1.jpg";

class LogoTitle extends React.Component{

render(){
return (<div className="logo-title" align="center">
          <img alt="Logo not Loaded" className="App-logo" src={logo}></img>
          <h1 className="Title">Eden</h1>
        </div>);
}
}
export default LogoTitle;