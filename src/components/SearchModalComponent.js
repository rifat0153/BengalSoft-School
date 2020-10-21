import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Search from './SearchComponent';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <i color="danger" className="fa fa-search fa-lg" onClick={toggle}></i>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="searchmodal-header" toggle={toggle}>Search For Courses</ModalHeader>
        <ModalBody className="searchmodal-body">
          <Search/>
        </ModalBody>
        <ModalFooter className="searchmodal-header">
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;