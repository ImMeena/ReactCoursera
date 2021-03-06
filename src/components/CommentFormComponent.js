import React, { Component } from 'react';
import { Button, Row, Col, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = ( len ) => ( val ) => val && ( val.length >= len );

class CommentForm extends Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    toggleModal ()
    {
        this.setState( {
            isModalOpen: !this.state.isModalOpen
        })
    }
    
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }


    render() {
        return (
            <React.Fragment>
                <Button outline color="secondary" onClick={ this.toggleModal }> <span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader> Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>
                                Rating
                            </Label>
                        <Col md={12}>
                            <Control.select model=".rating" defaultValue="1" className="form-control" name="rating" id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                        </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>
                                Your Name
                            </Label>
                            <Col md={ 12 }>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{ minLength: minLength(3), maxLength: maxLength(15)
                                } } />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }}
                                />
                            </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="comment" md={12}>
                                Comment
                            </Label>
                            <Col md={ 12 }>
                                <Control.textarea model=".comment" id="comment" name="comment" className="form-control" rows="6"/>   
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default CommentForm;