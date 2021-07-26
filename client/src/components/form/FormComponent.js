import { useState } from 'react';
import { Container, Form, FormGroup, Button } from 'reactstrap';
import InputComponent from './InputComponent';
import CheckboxComponent from './CheckboxComponent';

import useForm from '../../hooks/useForm';
import Joi from 'joi';

const schema = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  pages: Joi.number(),
  read: Joi.boolean(),
});

const FormComponent = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { values, handleChange } = useForm({
    initialValues: {
      title: '',
      author: '',
      pages: 0,
      read: 0,
    },
  });

  const validatePayload = (payload) => {
    const results = schema.validate(payload);
    if (!results.error) {
      return true;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: values.title,
      author: values.author || 'Unknown',
      pages: values.pages,
      read: values.read === '1' ? true : false,
    };

    if (validatePayload(payload)) {
      console.log('payload is valid');
    } else {
      console.log('payload is NOT valid');
    }

    props.action(payload);

    console.log('submitting form');
  };

  return (
    <>
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
    </>
  );
};

export default FormComponent;
