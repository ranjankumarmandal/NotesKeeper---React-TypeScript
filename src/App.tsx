import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Container from './components/utils/Container';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
