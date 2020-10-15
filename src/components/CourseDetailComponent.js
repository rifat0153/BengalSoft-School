import React from 'react';
import { Table, Jumbotron, Breadcrumb, BreadcrumbItem, Card, Accordion} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderTable({course}) {

    
    return(
        <div>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>  
            </Accordion> 
        </div> 
    );    
    
}

const Courses = (props) => { 

    const data = props.courses.map((course) => {
        return (
            <div key={course.id}>
                <RenderTable course={course} />
            </div>
        );
    });


    return(
        <div >
            <div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>OUR COURSES</h1>
                    <Breadcrumb >
                        <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>COURSES</BreadcrumbItem>
                    </Breadcrumb>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
            <div className="container">
                <Table>
                    <thead>
                        <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                    
                </Table>
                
            </div>
            
        </div>
        
    );
}

export default Courses;

// const Menu = (props) => {

//     const menu = props.dishes.map((dish) => {
//         return (
//             <div className="col-12 col-md-5 m-1"  key={dish.id}>
//                 <RenderMenuItem dish={dish} />
//             </div>
//         );
//     });

//     return (
//         <div className="container">
//             <div className="row">
//                 <Breadcrumb>
//                     <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                     <BreadcrumbItem active>Menu</BreadcrumbItem>
//                 </Breadcrumb>
//                 <div className="col-12">
//                     <h3>Menu</h3>
//                     <hr />
//                 </div>                
//             </div>
//             <div className="row">
//                 {menu}
//             </div>
//         </div>
//     );
// }