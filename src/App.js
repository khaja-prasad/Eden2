import "./App.css";
import React from "react";
import { useState } from "react";
import logo from "./logo1.jpg";
import LogoTitle from "./LogoTitle.js";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";
import Page3 from "./Page3.js";
import Page4 from "./Page4.js";
 
/*class App extends React.Component {
  render() {
    return (
      <div>
        <div className="logo-title" align="center">
          <img className="logo1" src={logo}></img>
          <h1 className="Title">Eden</h1>
        </div>
        <div className="page-bar">
          <div className="circles">1</div>
          <div className="lines"></div>
          <div className="circles">2</div>
          <div className="lines"></div>
          <div className="circles">3</div>
          <div className="lines"></div>
          <div className="circles">4</div>
        </div>
        <div className="heading" align="center">
          <h1 className="welcome-note">Welcome! First things first...</h1>
          <h3 className="info">You can also change them later.</h3>
          <div className="form-container2">
            <form>
              <label className="Name-label">Full Name</label>
              <br />
              <input
                type="text"
                placeholder="Steve Jobs"
                className="name"
              ></input>
              <br />
              <label className="DName-label">Display Name</label>
              <br />
              <input type="text" placeholder="Steve" className="name"></input>
              <br />
              <input
                className="submit"
                type="submit"
                value="Create Workspace"
              ></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pageNumber:1,
      
    }
    this.handleClick=this.handleClick.bind(this);
  }
  
 handleClick=(e,v)=>{
  this.setState({
    pageNumber:v
  });
 }
  render(){
    
    {switch(this.state.pageNumber){
      case 1:return <div>1
        <LogoTitle />
        <Page1 onSubmit={e=>this.handleClick(e,2)}/>
        </div>
    
      case 2:return <div>2
        <LogoTitle />
        <Page2 onSubmit={e=>this.handleClick(e,3)}/>
        </div>
      case 3:return <div>3
        <LogoTitle />
        <Page3 onSubmit={e=>this.handleClick(e,4)}/>
        </div>
      case 4:return <div>4
        <LogoTitle />
        <Page4 onSubmit={e=>this.handleClick(e,1)}/>
      </div>  
      default: return <div>1</div>
    }
  }
}
}
export default App;
