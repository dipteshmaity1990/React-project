//commented the code to see how function component work

// import React, {Component} from "react";
// import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

// class DishDetail  extends Component{
    
//     constructor(props){
//         super(props);
//         this.state ={
//             //dish: null
//         };
//     }
    
//     renderDishDetails(dish) {
//         console.log("dish.comments=>",dish);
//         if(dish != null){
//             return(
//                 <card>
//                     <CardImg width="100%" top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                       <CardTitle>{dish.name}</CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </card>
//             );
          
//         }
//         else{
//             return(
//                 <div></div>
//             )
//         }
//     }
//     renderComments(array) {          
        
//         if (array != null && array.length != 0 ) {
//             return (
                
//                 <div className="col-12 col-md-5 m-3">
//                     <h4>Comments</h4>
//                     {array.map(comment => (
//                         <ul className="list-unstyled">
//                             <li>
//                                 <p>{comment.comment}</p>
//                                 <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
//                             </li>
//                         </ul>
//                     )
//                     )}
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );

//         }
//     }
//     render(){
        
//          console.log("this.props.comments",this.props.comments); 
//         return(
//             <div className = "container">
//             <div className="row">
//                 <div  className="col-12 col-md-5 m-3">
//                     {this.renderDishDetails(this.props.dishDetails)}
//                 </div>
//                 {this.renderComments(this.props.dishDetails?.comments)}
                    
                
//             </div>
            
//         </div>
            
//         );
//     }
// } 

// export default DishDetail; 

//starting of functional component
import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

function RenderDishDetails({dish}){
        console.log("dish.comments=>",dish);
        if(dish !== null && dish != undefined){
            return(
                <Card key={dish?.id}>
                    <CardImg width="100%" top src={dish?.image} alt={dish?.name} />
                    <CardBody>
                        <CardTitle>{dish?.name}</CardTitle>
                        <CardText>{dish?.description}</CardText>
                    </CardBody>
                </Card>
            );
            
        }
    else{
        return(
            <div></div>
        )
    }
}

function RenderComments({array}) {       
    if (array !== null && array != undefined && array?.length !== 0 ) {
        return (
            
            <div className="col-12 col-md-5 m-3">
                <h4>Comments</h4>
                {array.map(comment => (
                    <ul className="list-unstyled">
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
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

const DishDetail = (props)=>{
     console.log("props ---",props)
    return(
        <div className = "container">
        <div className="row">
            <div  className="col-12 col-md-5 m-3">
            <RenderDishDetails dish={props.dishDetails} />
            </div>
            <RenderComments array ={props.dishDetails?.comments} />         
        </div>
        
    </div>
        
    );
}

export default DishDetail; 