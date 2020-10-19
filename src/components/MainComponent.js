import React, { Component } from 'react';
import '../App.css';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header2 from './HeaderComponent2';
import Header from './HeaderComponent';
import CourseTable from './CourseComponent';
import CourseDetail from './CourseDetailComponent';
import RegisterForm from './FormComponent';

import { COURSES } from '../shared/courses';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES,
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

    const CourseWithId = ({match}) => {
      return(
        //dish id is coming with match as a string paramter..so need to convert it to INT before using it in props 
          <CourseDetail course={this.state.courses.filter((item) => item.id === parseInt(match.params.courseId,10))[0]} />
      );
    };

    return (
      <div>
        <Header/>
        <Header2/>
        <Switch>
          <Route path='/home' component={Home} />
          {/* <Route exact path='/coursedetail' component={() => <Courses courses={this.state.courses} />} /> */}
          <Route exact path='/course' component={CourseTable} />
          <Route exact path='/registerform' component={RegisterForm} />
          {/* <Route exact path='/contactus' component={Contact} /> */}
          <Route path='/coursedetail/:courseId' component={CourseWithId} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;