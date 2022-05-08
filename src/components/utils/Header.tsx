import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>NotesKeeper</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
