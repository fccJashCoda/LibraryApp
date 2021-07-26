import { useState, useRef, useEffect } from 'react';
import { ButtonGroup, Button, Input } from 'reactstrap';

const CheckboxComponent = (props) => {
  const [rSelected, setRSelected] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isMounted) {
      const event = new Event('input', { bubbles: true });
      inputEl.current.dispatchEvent(event);
      props.action(event);
    } else {
      setIsMounted(true);
    }
  }, [rSelected]);

  return (
    <>
      <p>Did you read this book?</p>
      <ButtonGroup>
        <Button
          color='primary'
          onClick={() => {
            setRSelected(1);
          }}
        >
          Yes
        </Button>
        <Button
          color='primary'
          onClick={() => {
            setRSelected(0);
          }}
        >
          No
        </Button>
        <input readOnly value={rSelected} ref={inputEl} name='read' />
      </ButtonGroup>
    </>
  );
};

export default CheckboxComponent;
