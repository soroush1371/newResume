import React, { Component } from 'react';
import './fullpage.css';
class fullpage extends Component {
    render(){
        const {children} = this.props;
        return(
                    <div className="fullpage">
                        {children}
                    </div>

                )
    }
}
export default fullpage;