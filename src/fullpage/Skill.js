import React, {Component} from 'react'
import { updateArrayBindingPattern } from 'typescript';
import data from '../data.json';
import './fullpage.css';
import * as Scroll from 'react-scroll';
import {Link,Element} from 'react-scroll'

class Skill extends Component{
render(){
    return(
        <div className="fullpage third">
            <h2 style={{verticalAlign:"top"}}>
                {data.Sections[1].title}
            </h2>
                
                    <div className="card-wrapper">
                   { data.Sections[1].items.map(skill => {
                        return(
                            <div className="card">
                            <div className="image-wrapper">
                                <img alt="skill"  src={skill.Content.image}></img></div>
                                <div className="skill-title-wrapper">
                           <h4>{skill.Content.title}</h4>    
                              </div>
                            </div>
                            
                        )
                        
                    })
                    
                }
                </div>
                <div>
             <Element name="Title" className="element" style={{ transform:"translateY(-2000px)"}}></Element>      
<Link activeClass="active" to="Title" spy={true} smooth={true} offset={50} duration={500} style={{transform:"translateY(55px)"}} >
            <img src="images/up.png" alt="up" style={{display:"flex",flexDirection:"row"}}></img>
            </Link>
        </div>
      
       </div>
    )
}
    
}


         
                   
                   
export default Skill;
