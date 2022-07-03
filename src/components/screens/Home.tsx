import React, { useState } from 'react';
import { Note } from '../../models/note.models';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: 'Meetings',
      text: 'Schedule Meeting with UI/UX Team',
      color: '#dfdfdf',
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Container>
        <Row>
          <Col>Hello</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
