import react from "react";


import { Component } from 'react';
import Menu from './MenuComponent';
import DISHES from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'; 
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes: DISHES,
      //selectedDish: null
    };  

  }
    // onDishSelect(dishId){
    //     this.setState({selectedDish: dishId})
    // }
  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path ="/home" component={HomePage}/> 
          <Route path ="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/> 
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick = {(dishId)=>{this.onDishSelect(dishId)}} />
        <DishDetail dishDetails= {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
        <Footer/>
      </div>
    );
  }
  
}

export default Main;
