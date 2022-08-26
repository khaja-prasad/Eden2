import "./App.css";
import React from "react";
import userlogo from "./user90.png";
import teamlogo from "./team96.png";

class Page3 extends React.Component {
  render() {
    return (
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
          <div className="line2"></div>
          <div className="circles">4</div>
        </div>
        <div className="heading" align="center">
          <h1 className="welcome-note">How are you planning to use Eden?</h1>
          <h3 className="info">
            We'll streamline your setup experiance accordingly.
          </h3>
          <div className="form-container2">
            <form onSubmit={this.props.onSubmit}>
              <div className="card-holder">
                <div className="card" tabIndex={1}>
                  <img
                    alt="Logo not Loaded"
                    className="user-logo"
                    src={userlogo}
                  ></img>
                  <br />
                  <div className="card-text-holder">
                    <h3 className="card-text">For Myself</h3>
                    <p className="card-text2">Write better.Think more clearly.Stay organised.</p>
                  </div>
                </div>
                <div className="card" tabIndex={1}>
                  <img
                    alt="Logo not Loaded"
                    className="user-logo"
                    src={teamlogo}
                  ></img>
                  <div className="card-text-holder">
                    <h3 className="card-text">With my team</h3>
                    <p className="card-text2">Wikis,docs,tasks & projects,all in one place.</p>
                  </div>
                </div>
              </div>
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
}
export default Page3;
