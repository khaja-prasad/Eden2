import "./App.css";
import React from "react";
import LogoTitle from "./LogoTitle.js";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";
import Page3 from "./Page3.js";
import Page4 from "./Page4.js";
 

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
    
    switch(this.state.pageNumber){
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

export default App;
