import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


export class DishDetail extends Component {

  renderComments(dish) {
    if (dish != null) {
      return (
          <>
            {dish.comments.map(comment => {
              return (
                <div key={comment.id}>
                  <ul className='list-unstyled'>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {comment.date}</li>
                  </ul>
                </div>
              );
            })}
          </>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <React.Fragment>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
        </div>

        <div className="col-12 col-md-5 m-1">
          <Card className='p-2'>
            <h4>Comments</h4>
            {this.renderComments(dish)}
          </Card>
          </div>
        </React.Fragment>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  render() {

    const dish = this.props.dish;
    return (
      <div className="container">
        <div className='row'>
          {this.renderDish(dish)}
        </div>
      </div>
    )
  }
}

export default DishDetail;