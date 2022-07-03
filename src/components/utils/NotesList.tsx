import React from 'react';
import { NotesListProps } from '../../models/note.models';
import Notes from './Notes';

const NotesList = ({ notes }: NotesListProps) => {
  const handleDelete = (id: string) => {
    console.log('delete', id);
  };

  const renderNotes = () =>
    notes.map((note) => (
      <Notes key={note.id} note={note} handleDelete={handleDelete} />
    ));

  return (
    <>
      <h2 className='mt-3'>Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
