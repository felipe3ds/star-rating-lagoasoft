import React, { Component } from 'react';
import StarRate from './StarRate';

 
class RatingPanel extends Component {
  constructor(props) {
    super(props);
 
    this.state = {        
        rating: this.props.rating,        
        starCount:this.props.starCount        
    };
    this.onChangeRate = this.onChangeRate.bind(this);    
  }
  
  onChangeRate(rating){        
    this.props.onChangeRate(rating);        
  }
  
  render() {        
    let arrayStars = [];
    for (var i = 1; i < this.state.starCount+1; i++) {      
      arrayStars.push(<StarRate key={i} clicked={i<=this.props.rating} starValue={i} {...this.props} />);
    } 
      
    return (                
      <div className="vote-bar">             
        {arrayStars}
        
      </div>
    );
  }
}
 
export default RatingPanel;