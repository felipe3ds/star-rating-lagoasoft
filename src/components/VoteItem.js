import React, { Component } from 'react';
import VoteBar from './ratingComponent/VoteBar';
import "./VoteItem.css";
import PhotoModal from './PhotoModal'
 
class VoteItem extends Component {
  constructor(props) {      
    super(props);            
    this.state = {
      //rating: Math.round(1 + Math.random() * (5 - 1)),
      rating: 3,
      addModalShow: false,
      starCount: 10
    }
    this.onChangeRate = this.onChangeRate.bind(this);
    
  }
  

  onChangeRate(rating){
    this.setState({rating});
  }
  render() { 
    let addModalClose = () => this.setState({addModalShow: false});
    
    return (                
      <div className="vote-item">      
        <div key={this.props.id}>                        
            <img onClick={()=> this.setState({addModalShow:true})} src={this.props.thumbnailUrl} alt="" />
            <VoteBar 
                id={this.props.id}
                onChangeRate={this.onChangeRate}
                rating={this.state.rating}
                starCount={this.state.starCount}
            />
        </div>        
        
        <PhotoModal 
          show={this.state.addModalShow}
          onHide={addModalClose}              
          albumid={this.props.albumId}
          id={this.props.id}
          title={this.props.title}
          url={this.props.url}          
        />
        

      </div>
    );
  }
}
 
export default VoteItem;