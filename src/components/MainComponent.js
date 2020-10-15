import React, { Component } from 'react';
// import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
// import Contact from './ContactComponent';
import '../App.css';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header2 from './HeaderComponent2';
import Example from './DropdownComponent';
import Header from './HeaderComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    };
  }

  render() {

    const HomePage = () => {
      return(
          <Home />
            //   dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            //   promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            //   leader={this.state.leaders.filter((leader) => leader.featured)[0]}

      );
    }

    // const DishWithId = ({match}) => {
    //   return(
    //     //dish id is coming with match as a string paramter..so need to convert it to INT before using it in props 
    //       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
    //         comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    //   );
    // };

    return (
      <div>
        <Header/>
        <Header2/>
        <Switch>
          {/* <Route path='/home' component={Home} /> */}
          {/* <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path='/contactus' component={Contact} />
          <Route path='/menu/:dishId' component={DishWithId} /> */}
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;