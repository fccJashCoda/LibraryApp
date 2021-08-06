import { useState, useEffect } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import InputComponent from './InputComponent';
import CheckboxComponent from './CheckboxComponent';

import useForm from '../../hooks/useForm';
import Joi from 'joi';

const schema = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  pages: Joi.number(),
  read: Joi.boolean(),
  isbn: Joi.string(),
});

const FormComponent = (props) => {
  const [showing, setShowing] = useState(false);
  const { values, handleChange } = useForm({
    initialValues: {
      title: '',
      author: '',
      pages: 0,
      read: 0,
      isbn: '11111111',
    },
  });

  useEffect(() => {
    props.clearError();
  }, [values]);

  const validatePayload = (payload) => {
    const results = schema.validate(payload);
    if (!results.error) {
      return true;
    }

    props.displayError(results.error.message);

    return false;
  };

  const toggle = () => {
    setShowing(!showing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: values.title,
      author: values.author || 'Unknown',
      pages: values.pages,
      read: values.read === '1' ? true : false,
      isbn: values.isbn || 11111111,
    };

    if (!validatePayload(payload)) {
      return false;
    }

    props.action(payload);
  };

  return (
    <>
      {showing ? (
        <Form className='my-4'>
          <FormGroup className='mt-2'>
            <InputComponent title='Title' action={handleChange} />
          </FormGroup>
          <FormGroup className='mt-2'>
            <InputComponent title='Author' action={handleChange} />
          </FormGroup>
          <FormGroup className='mt-2'>
            <InputComponent
              title='Pages'
              placeholder='0'
              type='number'
              action={handleChange}
            />
          </FormGroup>
          <FormGroup className='mt-2'>
            <InputComponent
              title='ISBN'
              placeholder='11111111'
              type='text'
              action={handleChange}
            />
          </FormGroup>
          <FormGroup className='mt-2'>
            <CheckboxComponent action={handleChange} />
          </FormGroup>
          <FormGroup className='mt-2'>
            <Button className='btn-success' onClick={handleSubmit}>
              Submit
            </Button>
            <Button className='btn-info' onClick={toggle}>
              Hide Form
            </Button>
          </FormGroup>
        </Form>
      ) : (
        <Button onClick={toggle} className='my-3'>
          Add Book
        </Button>
      )}
    </>
  );
};

export default FormComponent;
