import React from 'react';
import { NotesListProps } from '../../models/note.models';
import Notes from './Notes';

const NotesList = ({ notes }: NotesListProps) => {
  const renderNotes = () => notes.map((note) => <Notes />);

  return (
    <>
      <h2 className='mt-3'>Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
