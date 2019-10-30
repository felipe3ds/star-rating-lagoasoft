import React, { Component } from 'react';
import RatingPanel from './RatingPanel';
 
class VoteBar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      rating: this.props.rating
    };
    this.onChangeRate = this.onChangeRate.bind(this);
  }
 
  onStarClick(rating) {    
    this.onChangeRate(rating);
    
  } 
  
  onChangeRate(rating){    
    this.setState({rating: this.props.rating});
    this.props.onChangeRate(rating);        
    this.setState({ rating: this.props.rating }, () => {
      console.log(this.state.rating, 'rating');
    }); 
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