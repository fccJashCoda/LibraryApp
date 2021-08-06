import { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color='light' light expand='md'>
        <Container fluid={true}>
          <NavbarBrand href='/'>Library</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className='justify-content-between'>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
            </Nav>
            <Form className='d-flex mr-2'>
              <FormGroup className='d-flex'>
                <Input
                  className='form-control me-sm-2'
                  type='text'
                  placeholder='Search'
                />
                <Button>Search</Button>
              </FormGroup>
            </Form>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
