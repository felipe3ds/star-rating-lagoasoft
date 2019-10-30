import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap'
import "./PhotoModal.css"

class PhotoModal extends Component{
   
    getPhotos(){      
        fetch('https://jsonplaceholder.typicode.com/photos/')
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

    render(){        
        return(
            <Modal   
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ID: {this.props.id} - Title: {this.props.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img alt={this.props.albumid} className="full-image" src={this.props.url} />
                    
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
          </Modal>
        )
    }
}

export default PhotoModal;