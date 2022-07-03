import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/utils/Header';
import Container from './components/utils/Container';
import Router from './Router/Router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Router />
      </Container>
    </>
  );
}

export default App;
