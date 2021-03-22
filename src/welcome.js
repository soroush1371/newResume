import React, {Component} from React;
import "./App.css";
class first extends React.Component{
     constructor(props)
         super(props){
             this.state = {
                 time:0
             }
         }
     

componentDidMount(){
  this.setState({
      name:"newName"
  })
}       
    


       render() {
            return(
                <div>

                </div>
            )}

}
export default first;