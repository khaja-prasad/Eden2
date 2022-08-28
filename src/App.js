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
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
 handleSubmit=(v)=>{
  this.setState({
    pageNumber:v
  });
 }
  render(){
    
    switch(this.state.pageNumber){
      case 1:return <div>
        <LogoTitle />
        <Page1 onSubmit={e=>this.handleSubmit(2)}/>
        </div>
    
      case 2:return <div>
        <LogoTitle />
        <Page2 onSubmit={e=>this.handleSubmit(3)}/>
        </div>
      case 3:return <div>
        <LogoTitle />
        <Page3 onSubmit={e=>this.handleSubmit(4)}/>
        </div>
      case 4:return <div>
        <LogoTitle />
        <Page4 onSubmit={e=>this.handleSubmit(1)}/>
      </div>  
      default: return <div>1</div>
    }
  }
}

export default App;
