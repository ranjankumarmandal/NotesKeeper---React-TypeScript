import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <h5>
        Version -{' '}
        <a
          href='https://github.com/ranjankumarmandal/NotesKeeper---React-TypeScript'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          1.0.0
        </a>
      </h5>
      <h5>Description - This is an online notes keeper Application</h5>
      <h5>
        Made By -{' '}
        <a
          href='https://www.linkedin.com/in/ranjan-kumar-m-818367158/'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Ranjan Kumar Mandal
        </a>
      </h5>
    </div>
  );
};

export default About;
