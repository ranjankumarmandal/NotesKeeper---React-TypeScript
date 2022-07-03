import React, { useState } from 'react';
import { Note } from '../../models/note.models';
import { Container, Row, Col } from 'react-bootstrap';
import NotesList from '../utils/NotesList';

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
          <Col>
            <NotesList notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
