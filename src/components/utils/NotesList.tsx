import React, { useState } from 'react';
import { NotesListProps } from '../../models/note.models';
import Notes from './Notes';

const NotesList = ({ notes, setNotes }: NotesListProps) => {
  const handleDelete = (id: string) => {
    console.log('delete', id);
    setNotes(notes.filter((note) => note.id !== id));
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
