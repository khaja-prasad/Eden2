import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className="form-container" align="center">
    
      <h1 className="Title" >Eden</h1>
      <h1 className="Title2 ">Welcome! First things first...</h1>
      <h3 className="Title-dull">You can also change them later.</h3>
      <div className='form-container2'><form >
      <label className="Name-label" >Full Name</label><br/>
      <input 
        type="text"
        placeholder='Steve Jobs'
        className='input'>
        </input><br/>
      <label className="DName-label">Display Name</label><br/>
      <input 
        type="text"
        placeholder='Steve'
        className='input'>
      </input><br/>
      <input class='input2'type='submit' value='Create Workspace'></input>
      </form>
      </div>
      </div>
    )
  }
}
export default App;
