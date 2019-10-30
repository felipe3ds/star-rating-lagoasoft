import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa'; 
import "./StarRate.css";

 
class StarRate extends Component {
  constructor(props) {
    super(props);
    this.state = {        
        starValue: this.props.starValue,                        
        clicked: this.props.clicked
    };  
  }
    
  toggleState(){       
    this.state.starValue>=this.props.rating?
      this.setState({ clicked: !this.state.clicked })
      :
      this.setState({ clicked: this.state.clicked })
    this.state.clicked&&this.props.rating===this.state.starValue?
      this.props.onChangeRate(0)
      :
      this.props.onChangeRate(this.state.starValue);
  }

  render() {    
    
    return (                
        <i className="icon-star-rate" onClick={() => this.toggleState()} aria-hidden="true" style={this.props.clicked===true ? {color: 'gold'} : {color: '#333'}}>
            
                <FaStar />
        </i>
    );
  }
}
 
export default StarRate;