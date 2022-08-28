import "./App.css";
import React from "react";

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSpaceName: "",
      url: "",
    };
  }

  handleWorkSpaceName = (e) => {
    this.setState({
      workSpaceName: e.target.value,
    });
  };

  handleUrl = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="page-bar">
          <div className="circles circle-color">1</div>
          <div className="line1 line1-color"></div>
          <div className="line2 line1-color"></div>
          <div className="circles circle-color">2</div>
          <div className="line1 line1-color"></div>
          <div className="line2"></div>
          <div className="circles">3</div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="circles">4</div>
        </div>
        <div className="heading" align="center">
          <h1 className="welcome-note">Let's setup a home for all your work</h1>
          <h3 className="info">
            You can always create another workspace later.
          </h3>
          <div className="form-container2">
            <form onSubmit={this.props.onSubmit}>
              <label className="Name-label">Workspace Name</label>
              <br />
              <input
                type="text"
                placeholder="Eden"
                className="name"
                value={this.state.workSpaceName}
                onChange={this.handleWorkSpaceName}
              ></input>
              <br />
              <label className="DName-label">
                Workspace URL<span>(Optional)</span>
              </label>
              <br />
              <div className="button-text">
                <button disabled="true" className="prefix">
                  www.eden.com/
                </button>
                <input
                  type="text"
                  placeholder="Example"
                  className="name url"
                  value={this.state.url}
                  onChange={this.handleUrl}
                ></input>
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
export default Page2;
