import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments ( { comments }) {
    if (comments != null) {
      return (
          <div className="container">
            {comments.map(comment => {
              return (
                <div key={comment.id}>
                  <ul className='list-unstyled'>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                  </ul>
                </div>
              );
            })}
          </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

function RenderDish ( { dish}) {
    if (dish != null) {
      return (
        <div className="container">
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
              <RenderComments comments={ dish.comments}/>
          </Card>
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  const DishDetail= (props)=> {

    return (
      <div className="container">
        <div className='row'>
         <RenderDish dish={props.dish} />
        </div>
      </div>
    )
  }

export default DishDetail;