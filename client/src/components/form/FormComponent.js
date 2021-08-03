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
});

const FormComponent = (props) => {
  const [showing, setShowing] = useState(false);
  const { values, handleChange } = useForm({
    initialValues: {
      title: '',
      author: '',
      pages: 0,
      read: 0,
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
    };

    if (!validatePayload(payload)) {
      // props.displayError('Payload is NOT valid');
      return false;
    }

    props.action(payload);

    console.log('submitting form');
  };

  return (
    <>
      {showing ? (
        <Form>
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
        <Button onClick={toggle}>Add Book</Button>
      )}
    </>
  );
};

export default FormComponent;
