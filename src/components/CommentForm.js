import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody,
            Button, Row, Col, Label } from 'reactstrap';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			isModalOpen: false
		};
	}
	
	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}
	
	handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();
  }
	
	render() {
		return(
			<div>
			<Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
							<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							
									<Row className="form-group">
											<Label htmlFor="rating" sm="2">Rating</Label>
											<Col sm={{size: 12, offset: 0}}>
                          <Control.select model=".rating" name="rating"
                              className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                          </Control.select>
                      </Col>
									</Row>
									
									<Row className="form-group">
                      <Label htmlFor="yourname" sm="12">Your Name</Label>
                      <Col sm="12">
                          <Control.text model=".yourname" id="yourname" name="yourname"
                              placeholder="Your Name"
                              className="form-control"
                              validators={{
                                  minLength: minLength(3), maxLength: maxLength(15)
                              }}
                               />
                          <Errors
                              className="text-danger"
                              model=".yourname"
                              show="touched"
                              messages={{
                                  minLength: 'Must be greater than 2 characters',
                                  maxLength: 'Must be 15 characters or less'
                              }}
                           />
                      </Col>
                  </Row>
                  
                  <Row className="form-group">
                      <Label htmlFor="commentmessage" sm={12}>Comment</Label>
                      <Col sm={12}>
                          <Control.textarea model=".commentmessage" id="commentmessage" name="commentmessage"
                              rows="6"
                              className="form-control" />
                      </Col>
                  </Row>
                  
                  <Row className="form-group">
                      <Col md={{size:2, offset: 0}}>
                          <Button type="submit" color="primary">
                          Submit
                          </Button>
                      </Col>
                  </Row>
							</LocalForm>
					</ModalBody>
			</Modal>
			</div>
		);
	}
}

export default CommentForm;
