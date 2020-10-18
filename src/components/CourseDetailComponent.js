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
            
           const { id, code, name, featured, description} = course //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{code}</td>
                 <td>{name}</td>

                 <td>{description}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.courses[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     render() {
        return (
           <div>
              <h1 id='title'>COURSE DETAILS</h1>
              <table responsive id='courses'>
                 <tbody >
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
  }
  
  export default CourseTable;