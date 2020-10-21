import React, { Component } from 'react'
import { COURSES } from '../shared/courses';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class CourseTable extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         courses: COURSES
      }
   }   

   renderTableData() {
      return this.state.courses.map((course, index) => {
         
         const { id, code, name, description} = course //destructuring
         return (
            <Link to={`/coursedetail/${course.id}`}>
               <tr key={id} className="a">
               {/* <td><Link to={`/coursedetail/${course.id}`}>{id}</Link></td>
               <td><Link to={`/coursedetail/${course.id}`}>{code}</Link></td>
               <td><Link to={`/coursedetail/${course.id}`}>{name}</Link></td>
               <td><Link to={`/coursedetail/${course.id}`}>{description}</Link></td> */}
               <td>{id}</td>
               <td>{code}</td>
               <td>{name}</td>
               <td>{description}</td>
               </tr>
            </Link>
            

         )
      })
   }

   renderTableHeader() {
      let header = Object.keys(this.state.courses[0])
      return header.map((key, index) => {
         return <th scope="row" key={index}>{key.toUpperCase()}</th>
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>COURSE DETAILS</h1>
            <Table responsive id='courses' onClick={this.renderTableData()}>
               <tbody >
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </Table>
         </div>
      )
   }
}
  
  export default CourseTable;