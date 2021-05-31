import React, {Component} from "react";
import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

class DishDetail  extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            //dish: null
        };
    }
    
    renderDishDetails(dish) {
        console.log("dish.comments=>",dish);
        if(dish != null){
            return(
                <card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </card>
            );
          
        }
        else{
            return(
                <div></div>
            )
        }
    }
    renderComments(array) {
        
            
              
        
        if (array != null && array.length != 0 ) {
            return (
                
                <div className="col-12 col-md-5 m-3">
                    <h4>Comments</h4>
                    {array.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );

        }
    }
    render(){
        
         console.log("this.props.comments",this.props.comments); 
        return(
            <div className = "container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDishDetails(this.props.dishDetails)}
                </div>
                {this.renderComments(this.props.dishDetails?.comments)}
                    
                
            </div>
            
        </div>
            
        );
    }
} 

export default DishDetail; 