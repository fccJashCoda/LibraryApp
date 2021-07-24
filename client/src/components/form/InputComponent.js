// import { useState } from 'react';
import { Input, Label } from 'reactstrap';

const InputComponent = (props) => {
  // const [value, setValue] = useState('');

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <>
      <Label>{props.title}</Label>
      <Input
        value={props.value}
        onChange={(e) => props.action(e)}
        type={props.type || 'text'}
        placeholder={props.placeholder || props.title.toLowerCase()}
        id={props.title.toLowerCase()}
      />
    </>
  );
};

export default InputComponent;
