import React, { Component } from 'react';
import '../App.css';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Header2 from './HeaderComponent2';
import Header3 from './HeaderComponent3';
import CourseTable from './CourseComponent';
import CourseDetail from './CourseDetailComponent';
import RegisterForm from './FormComponent';
import Search from './SearchComponent';
import Calendar from './CalendarComponent';
import Teacher from './TeacherComponent';
import Contact from './ContactComponent';
import MapContainer from './MapComponent';

import { COURSES } from '../shared/courses';
import { TEACHERS } from '../shared/teachers';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES,
      teachers: TEACHERS,
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
        <Header3/>
        <Switch>
          <Route path='/home' component={Home} />
          {/* <Route exact path='/coursedetail' component={() => <Courses courses={this.state.courses} />} /> */}
          <Route exact path='/course' component={CourseTable} />
          <Route exact path='/registerform' component={RegisterForm} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/map' component={MapContainer} />
          <Route exact path='/teacher' component={() => <Teacher teachers={this.state.teachers} />} />
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