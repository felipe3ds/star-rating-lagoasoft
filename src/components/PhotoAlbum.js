import React, { Component } from 'react';
import VoteItem from './VoteItem';
 
class PhotoAlbum extends Component {
  constructor() {
    super();    

    this.state = {
        photos: []
    }

    this.getProducts = this.getProducts.bind(this);

  }
 
  componentDidMount(){
    
    const photos = this.getProducts();
    this.setState({ photos});
  }
  
  getProducts(){      
      
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then((data) => {
            let half_length = Math.ceil(data.length / 1000);    
            let leftSide = data.splice(0,half_length);

            this.setState({ photos: leftSide });          
        })
        .catch(console.log);        
        return this.state.photos;
    } 
 
  render() { 
    return (                
      <div className="">   
          { this.state.photos.map(photo => {
                return(
                    <VoteItem key={photo.id} 
                        {...photo}
                    />                        
                ) 
            })
          }
      </div>
    );
  }
}
 
export default PhotoAlbum;