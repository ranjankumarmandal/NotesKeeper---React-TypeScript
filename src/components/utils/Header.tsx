import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ marginBottom: '80px' }}>
      <Navbar fixed='top' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              NotesKeeper
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to='/about'
            >
              About
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
