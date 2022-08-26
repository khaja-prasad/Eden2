import "./App.css";
import React from "react";
import App from "./App";

class Page4 extends React.Component{
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
          <div className="form-container2">
            <form onSubmit={this.props.onSubmit}>
              
                <h1 className="welcome-note">Congratulations,Eren!</h1>
                <h4 className="info">You have completed onboarding,you can start using the Eden!</h4>
                <input
                  className="submit"
                  type="submit"
                  value="Launch Eden"></input>
              
            </form>
          </div>
          </div>
    </div>
    );
    }
}
export default Page4;