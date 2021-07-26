// import { useState } from 'react';
import { Input, Label } from 'reactstrap';

const InputComponent = (props) => {
  return (
    <>
      <Label>{props.title}</Label>
      <Input
        value={props.value}
        onChange={(e) => props.action(e)}
        type={props.type || 'text'}
        placeholder={props.placeholder || props.title.toLowerCase()}
        id={props.title.toLowerCase()}
        name={props.title.toLowerCase()}
      />
    </>
  );
};

export default InputComponent;
