import React from 'react';
import './App.css';
import Home from './components/Home';
import Events from './components/Events';
import Types from './components/Types';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar bg='info' variant='dark'>
        <Navbar.Brand><h2>TicketGuru Demo Client</h2></Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'><h4>Home</h4></Nav.Link>
          <Nav.Link as={Link} to='/events'><h4>Events</h4></Nav.Link>
          <Nav.Link as={Link} to='/types'><h4>Ticket Types</h4></Nav.Link>
        </Nav>
      </Navbar>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/events' component={Events} />
            <Route path='/types' component={Types} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
