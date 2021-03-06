import React, { Component } from 'react';
import RatingPanel from './RatingPanel';
 
class VoteBar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      rating: this.props.rating
    };    
  }  
  
  onChangeRate(rating){        
    this.props.onChangeRate(rating);            
  }

  render() {    
    return (                
      <div className="vote-bar">   
        Nota: {this.props.rating}                                                          
        <RatingPanel starCount={this.props.starCount} {...this.props}/>
      </div>
    );
  }
}
 
export default VoteBar;