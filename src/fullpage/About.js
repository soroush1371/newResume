import data from '../data.json';
import React, {Component} from 'react';
import './fullpage.css';
class About extends Component {
    render(){
        return(
            <div className="fullpage first">
            <h2> 
              {data.Sections[0].title}
            </h2>
           <h5 style={{fontsize: "20px"}}>
             {data.Sections[0].items[0].content}
           </h5>
          </div>
        )}
        
    }
    
export default About;






