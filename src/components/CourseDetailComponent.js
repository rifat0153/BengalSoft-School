import React from 'react';
import { Table, Jumbotron, Breadcrumb, BreadcrumbItem, Card, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

renderTableData() {
    // return props.courses.map((course, index) => {
    //    const { id, code, name, description } = course //destructuring

        const course = props.courses.map((course) => {
            return (
                <tr key={course.id}>
                   <td>{course.id}</td>
                   <td>{course.name}</td>
                   <td>{course.age}</td>
                   <td>{course.email}</td>
                </tr>
             );
            
        });
    }

    //    return (
    //       <tr key={id}>
    //          <td>{id}</td>
    //          <td>{name}</td>
    //          <td>{age}</td>
    //          <td>{email}</td>
    //       </tr>
    //    );
    // });
//  }

//  const menu = props.dishes.map((dish) => {
//     return (
//         <div className="col-12 col-md-5 m-1"  key={dish.id}>
//             <RenderMenuItem dish={dish} />
//         </div>
//     );
// })

const Courses = (props) => { 

    // const data = props.courses.map((course) => {
    //     return (
    //         <div key={course.id}>
    //             {/* <RenderTable course={course} /> */}
    //         </div>
    //     );
    // });


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
            <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='courses'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
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