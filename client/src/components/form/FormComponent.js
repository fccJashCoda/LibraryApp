import { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import InputComponent from './InputComponent';
import CheckboxComponent from './CheckboxComponent';

import useForm from '../../hooks/useForm';

const FormComponent = () => {
  const { values, handleChange } = useForm({
    initialValues: {
      title: '',
      author: '',
      pages: 0,
      read: 1,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitting form');
  };

  return (
    <Form>
      <Container className='mt-2'>
        <FormGroup>
          <InputComponent title='Title' action={handleChange} />
        </FormGroup>
        <FormGroup>
          <InputComponent title='Author' action={handleChange} />
        </FormGroup>
        <FormGroup>
          <InputComponent
            title='Pages'
            placeholder='0'
            type='number'
            action={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <CheckboxComponent action={handleChange} />
        </FormGroup>
        <FormGroup>
          <Button onClick={handleSubmit}>Submit</Button>
        </FormGroup>
      </Container>
    </Form>
  );
};

export default FormComponent;
