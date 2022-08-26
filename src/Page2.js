import "./App.css";
import React from "react";
import App from "./App";

class Page2 extends React.Component{
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
          <h1 className="welcome-note">Let's setup a home for all your work</h1>
          <h3 className="info">You can always create another workspace later.</h3>
          <div className="form-container2">
            <form onSubmit={this.props.onSubmit}>
              <label className="Name-label">Workspace Name</label>
              <br />
              <input
                type="text"
                placeholder="Eden"
                className="name"
              ></input>
              <br />
              <label className="DName-label">Workspace URL</label>
              <br />
              <input type="text" placeholder="Example" className="name"></input>
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
export default Page2;