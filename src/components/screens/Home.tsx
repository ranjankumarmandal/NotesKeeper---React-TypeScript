import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NotesList from '../utils/NotesList';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <NotesList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
