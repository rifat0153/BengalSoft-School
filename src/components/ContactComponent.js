import React , {Component} from 'react';
import Teacher from './TeacherComponent';
import MapContainer from './MapComponent';
import { TEACHERS } from '../shared/teachers';


class Contact extends Component  {

    constructor(props) {
        super(props);
        this.state = {
          teachers: TEACHERS,
        };
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row contact-content">
                    <div className="contact-heading">
                       <h2 className="contact-headingtext">Who We Are <br></br></h2>
                       <text className="contact-text1">Safeer Online Madrasah (SOM)</text>
                       <text className="contact-text2">(Owned by EduAid Limited, UK, Company No 09971816)</text>
                    </div>
                </div>
                <div>
                    <Teacher teachers={this.state.teachers} />
                </div>
                <div className="container-fluid contact-map">
                    <MapContainer/>
                </div>
            </div>
        );  
    }

    
}

export default Contact;