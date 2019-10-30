import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap'
import "./PhotoModal.css"

class PhotoModal extends Component{
   

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