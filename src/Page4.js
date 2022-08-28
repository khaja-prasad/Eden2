import "./App.css";
import React from "react";

class Page4 extends React.Component{
    render(){
    return(
    <div>
        <div className="page-bar">
          <div className="circles circle-color">1</div>
          <div className="line1 line1-color"></div>
          <div className="line2 line1-color"></div>
          <div className="circles circle-color">2</div>
          <div className="line1 line1-color"></div>
          <div className="line2 line1-color"></div>
          <div className="circles circle-color">3</div>
          <div className="line1 line1-color"></div>
          <div className="line2 line1-color"></div>
          <div className="circles circle-color">4</div>
        </div>
        <div className="circle-tick"><div id="tick-mark"></div></div>
        <div className="heading" align="center">
            <h1 className="welcome-note">Congratulations,Eren!</h1>
            <h4 className="info">You have completed onboarding,you can start using the Eden!</h4>
          <div className="form-container2 mod">
            <form onSubmit={this.props.onSubmit}>
              
               
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