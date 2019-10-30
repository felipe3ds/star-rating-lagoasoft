import React, { Component } from 'react';
import StarRate from './StarRate';

 
class RatingPanel extends Component {
  constructor(props) {
    super(props);
 
    this.state = {                
        starCount:this.props.starCount        
    };    
  }
  
  onChangeRate(rating){        
    this.props.onChangeRate(rating);        
  }
  
  render() {    
    //TODO: colocar array o constructor(?)    
    let arrayStars = [];
    for (var i = 1; i < this.state.starCount+1; i++) {      
      arrayStars.push(<StarRate key={i} clicked={i<=this.props.rating} starValue={i} {...this.props} />);
    } 
      
    return (                
      <div className="rating-panel">             
        {arrayStars}        
      </div>
    );
  }
}
 
export default RatingPanel;