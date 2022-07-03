import React from 'react';
import { NoteProps } from '../../models/note.models';
import { Card } from 'react-bootstrap';

const Notes = ({ note }: NoteProps) => {
  return (
    <div className='mb-3'>
      <Card>
        <Card.Title>{note.title}</Card.Title>
      </Card>
    </div>
  );
};

export default Notes;
