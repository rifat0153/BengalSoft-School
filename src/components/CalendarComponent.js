import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle, CardText, CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Calendar(){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem>Academic Calendar</BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className="row "> 
                <div className="col-12 col-md-8">
                    <Card >
                        <CardHeader className="calendar-cardheader">
                            <CardTitle ><h5>Academic year and terms</h5></CardTitle>
                        </CardHeader>
                        <CardBody className="calendar-cardbody">
                            <CardText>
                            Our Academic year follow UK & EU academic style: September to July.<br></br>
                            There will be three terms as follows:<br></br>
                            <b>Autumn Term:</b> 14th September to 24th December 2020<br></br>
                            <span className="calendar-text" ><b>Holidays:</b> 25th December-31st December 2020</span><br></br>
                            <b>Spring Term:</b> 1st January 2021- 2nd April 2021. 1st January 2021- 2nd April 2021.<br></br>
                            <span className="calendar-text" ><b>Holidays:</b> 5th April – 11 April 2021</span><br></br>
                            <b>Summer Term:</b> 12th April 2021- 30th July 2021<br></br>
                            <span className="calendar-text" ><b>Holidays:</b> 31st July 2021-31st August 2021</span> <br></br>
                            <span className="calendar-text" >Additionally, there will be Two Eid Holidays</span>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-4 calendar-other">
                    <span >Other Content</span>
                </div>
            </div>
        
        </div>
    );
}