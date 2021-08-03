import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const BookFormModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    console.log('opening modal');
  };

  return (
    <>
      <Button onClick={toggle}>Open Modal</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>First step</ModalHeader>
        <ModalBody>walk before you run</ModalBody>
      </Modal>
    </>
  );
};

export default BookFormModal;
