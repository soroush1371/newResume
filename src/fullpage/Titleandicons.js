import data from '../data.json';
import { SocialIcon } from 'react-social-icons';
import React, {Component} from 'react';
import './fullpage.css';
import fullpage from './fullpage.js';
import Down from './Down';
import * as Scroll from 'react-scroll';
import {Link,Element} from 'react-scroll'
var Snow = require('react-snow-effect')

class Titleandicons extends Component{
  
  state={
    color:'white',
  }
  changeColor(){
       this.setState({
         color: this.state.color === 'yellow'?'white':'yellow' ,
        
       })
  }
  Button=()=>{
 
    this.setState({
      
      backgroundColor:this.state.backgroundColor==='blue'?'brown':'blue'
    });
  }

 
   
    render() {
        return(
          <div className="nav">
              <div className="navigation">
              <a><Link activeClass="active" to="Skill" spy={true} smooth={true} offset={50} duration={500} href="#home" style={{color:"bisque"}}>Skills</Link></a>
              <a><Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} href="#About" style={{color:"aqua"}}>About</Link></a>
               <button type="button" onClick={this.Button}
           style={{maxHeight:"25px",Width:"25px",padding:"0px",margin:"5px",justifyContent: "left",float:"left",alignItems:"left"}}>
                   <img src="images/Change.png" alt="change"  style={{width:"15px",height:"15px",padding:"0px",margin:"0px"}} /></button></div>
               
          <div className="second fullpage" style={{backgroundColor:this.state.backgroundColor}}>
         
         <h1 style={{
         color:this.state.color
        }}
               onMouseLeave={()=>{
          this.changeColor()
 }}
        onMouseOver={()=>{
          this.changeColor()
 }}
     
 
       >{data.title}</h1>

             <div className='my-fancy-app'>
                <Snow />
        
            </div>
            <div>
       
       </div>
     <h2 className="title">
       
         {data.subtitle}
        </h2>
        <div className="icons-wrapper">
             {Object.keys(data.link).map(key => {
               return (
                  <SocialIcon url={data.link[key]} />
      )
             })
            }</div>
<Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} className='Link'>
            <Down/></Link>
           <Element name="About" className="element" style={{ transform:"translateY(+155px)"}}>
                   
        </Element>
        <Element name="Skill" className="element" style={{ transform:"translateY(+600px)"}}>
                   
                   </Element>
      </div></div>
            
        )}}

export default Titleandicons;