import React, { useState } from 'react';
import { Note } from '../../models/note.models';

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

  return <div>{notes[0].id}</div>;
};

export default Home;
