import React from 'react'
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderCourse({course}) {
       

        if(course!=null) {
            return (
                
                    <div>
                        <Card >
                        <CardBody >
                            <CardTitle ><h4>Course Code: {course.code}</h4></CardTitle>
                        </CardBody>
                        </Card>
                        <Card >
                        <CardBody >
                            <CardText><h5>DESCRIPTION:<br></br>{course.description}</h5></CardText>
                        </CardBody>
                        </Card>
                        
                    </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    const CourseDetail = (props) => {
        if(props.course!=null) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/course">Course</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.course.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.course.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12">
                        <RenderCourse course={props.course} />
                    </div>
                </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
        
    }
    

export default CourseDetail