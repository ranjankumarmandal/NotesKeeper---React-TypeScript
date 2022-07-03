import React from 'react';
import { NotesListProps } from '../../models/note.models';
import Notes from './Notes';

const NotesList = ({ notes }: NotesListProps) => {
  return (
    <>
      <h2 className='mt-3'>Notes</h2>
    </>
  );
};

export default NotesList;
