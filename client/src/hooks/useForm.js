import { useState } from 'react';

const useForm = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    console.log(e.target);

    setValues({
      ...values,
      [name]: value,
    });

    console.log('value: ', value);
    console.log('name: ', name);
    console.log('values: ', values);
  };

  return {
    values,
    handleChange,
  };
};

export default useForm;
