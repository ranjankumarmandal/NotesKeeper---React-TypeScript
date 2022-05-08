import React, { useState } from 'react';

interface State {
  id: string;
  title: string;
  text: string;
  color: string;
  date: string;
}

const Home = () => {
  const [notes, setNotes] = useState<State[]>([
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
