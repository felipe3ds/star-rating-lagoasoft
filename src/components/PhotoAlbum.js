import React, { Component } from 'react';
import VoteItem from './VoteItem';
 
class PhotoAlbum extends Component {
  constructor() {
    super();    

    this.state = {
        photos: []
    }

    this.getPhotos = this.getPhotos.bind(this);

  }
 
  componentDidMount(){
    
    const photos = this.getPhotos();
    this.setState({ photos});
  }
  
  getPhotos(){      
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then((data) => {
          //TODO: remover limitador de objetos da API
            let half_length = Math.ceil(data.length / 100);    
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