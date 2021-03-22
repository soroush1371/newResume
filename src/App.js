
import  React, { Component } from 'react';
import './fullpage/fullpage.css';
import Titleandicons from './fullpage/Titleandicons'
import About from './fullpage/About'
import Skill from './fullpage/Skill'
class App extends Component {
  render(){
    
  return (
    <div className="App">
    
      
     
     <Titleandicons/>
      <About />     
      <Skill />
      
      </div>
  
    
  )}
}

export default App;
