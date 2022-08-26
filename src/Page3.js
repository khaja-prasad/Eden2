import "./App.css";
import React from "react";
import App from "./App";

class Page3 extends React.Component{
    render(){
    return(
    <div>
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
          <h1 className="welcome-note">How are you planning to use Eden?</h1>
          <h3 className="info">We'll streamline your setup experiance accordingly.</h3>
          <div className="form-container2">
            <form onSubmit={this.props.onSubmit}>
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
    </div>);
    }
}
export default Page3;