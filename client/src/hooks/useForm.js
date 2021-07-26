import { useState } from 'react';

const useForm = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setValues({
      ...values,
      [name]: value,
    });

    console.log('value: ', value);
  };

  return {
    values,
    handleChange,
  };
};

export default useForm;
