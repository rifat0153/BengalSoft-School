import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const RegisterForm = (props) => {
  return (
    
    <div className="container  registration-form"> 
        <Form className="registration-form-color">
        <FormGroup row  >
            <Label for="Name" className="col-sm-2 offset-1 registration-form-label">FULL NAME</Label>
            <Col sm={8}>
            <Input type="text" name="Name" id="Name" placeholder="Enter Your Name" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="DOB" className="col-sm-2 offset-1 registration-form-label">DATE OF BIRTH</Label>
            <Col sm={8}>
            <Input type="text" name="DOB" id="DOB" placeholder="DD--MM--YY" />
            </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
            {/* <legend className="col-form-label col-sm-2">GENDER</legend> */}
            <Label for="radio2" className="col-sm-2 offset-1 registration-form-label">GNEDER</Label>
            <Col sm={8}>
            <FormGroup check>
                <Label check>
                <Input type="radio" name="radio2" />{' '}
                    MALE
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="radio" name="radio2" />{' '}
                    FEMALE
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="radio" name="radio2" />{' '}
                    OTHER
                </Label>
            </FormGroup>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="FatherName" className="col-sm-2 offset-1 registration-form-label">FATHER NAME</Label>
            <Col sm={8}>
            <Input type="text" name="FatherName" id="FatherName" placeholder="Enter Your Father's Name" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="MotherName" className="col-sm-2 offset-1 registration-form-label">MOTHER NAME</Label>
            <Col sm={8}>
            <Input type="text" name="MotherName" id="MotherName" placeholder="Enter Your Mother's Name" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="Email" className="col-sm-2 offset-1 registration-form-label">EMAIL</Label>
            <Col sm={8}>
            <Input type="email" name="Email" id="Email" placeholder="Enter Your Email" />
            </Col>
        </FormGroup>
        {/* <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </Col>
        </FormGroup> */}
        <FormGroup row>
            <Label for="exampleSelect" className="col-sm-2 offset-1 registration-form-label">COURSES</Label>
            <Col sm={8}>
            <Input type="select" name="select" id="exampleSelect">
                <option>ARABIC</option>
                <option>ENGLISH</option>
                <option>PHYSICS</option>
                <option>CHEMISTRY</option>
                <option>EEE</option>
            </Input>
            </Col>
        </FormGroup>
        {/* <FormGroup row>
            <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
            <Col sm={10}>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
            </Col>
        </FormGroup> */}
        <FormGroup row>
            <Label for="exampleText"className="col-sm-2 offset-1 registration-form-label">ABOUT YOURSELF</Label>
            <Col sm={8}>
            <Input type="textarea" name="text" id="exampleText" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleFile" className="col-sm-2 offset-1 registration-form-label">PHOTO</Label>
            <Col sm={8}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
                upload a recent photo
            </FormText>
            </Col>
        </FormGroup>
        
        {/* <FormGroup row>
            <Label for="checkbox2" sm={2}>Checkbox</Label>
            <Col sm={{ size: 10 }}>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
                </Label>
            </FormGroup>
            </Col>
        </FormGroup> */}
        <FormGroup check row>
            <Col sm={{ size: 15, offset: 3 }}>
            <Button className="registration-form-submit" >Submit</Button>
            </Col>
        </FormGroup>
    </Form>
    </div>
    
  );
}

export default RegisterForm;