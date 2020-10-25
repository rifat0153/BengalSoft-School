import React from 'react';
import { 
    Card,
    CardImg,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    CardBody,
    CardText,
    CardFooter,
    NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

    //defining the RenderMenuItem as a function instead of a component
    function RenderTeacherItem ({t}) {
        return (
            <div className="col-12 ">
                <Card >
                    <CardImg width="100%" src={t.image} alt={t.name} />
                    <CardBody>
                        <div className="teacher-card">
                            <CardText className="teacher-cardtext">
                            <CardTitle>{t.name}</CardTitle>
                                {t.location}<br></br>
                                {t.designation}
                            </CardText>
                        </div>
                        <CardFooter>
                            <div className="row ">
                                <div className="col-2"><NavLink  className="teacher-link" href="https://www.facebook.com/"><span className="fa fa-facebook fa-lg"></span></NavLink></div>
                                <div className="col-2"><NavLink  className="teacher-link" href='/contactus'><span className="fa fa-twitter fa-lg"></span></NavLink></div>
                                <div className="col-2"><NavLink  className="teacher-link" href='/contactus'><span className="fa fa-linkedin fa-lg"></span></NavLink></div>
                            </div>
                            
                        </CardFooter>
                    </CardBody>
                    
                {/* </Link> */}
                </Card>
            </div>
            
        );
    }

    //Another way to define a function in React [ => is a ES6 symbol]
    const Teacher = (props) => {

        const teacher = props.teachers.map((t) => {
            return (
                <div className="col-12  col-md-4"  key={t.id}>
                    <RenderTeacherItem t={t} />
                </div>
            );
        });

        return (
            <div className="container-fluid">
                <div className="row col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Teachers</BreadcrumbItem>
                    </Breadcrumb>               
                </div>
                <div className="teacher-content">
                    <div className="col-12">
                            <h3>OUR BELOVED TEACHERS</h3>
                            <hr />
                        </div> 
                    <div className="row">
                        {teacher}
                    </div>
                </div>
                
            </div>
        );
    }

export default Teacher;