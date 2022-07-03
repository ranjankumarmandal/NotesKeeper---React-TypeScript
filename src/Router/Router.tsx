import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/screens/Home';
import About from '../components/screens/About';
import Header from '../components/utils/Header';
import Container from '../components/utils/Container';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
