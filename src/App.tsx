import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
