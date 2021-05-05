import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableIcons from './components/TableIcons';
import Home from './components/Home';
import TicketSale from './components/TicketSale';
import TypePage from './components/TypePage';
import NewTicket from './components/NewTicket';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand><h2>TicketGuru Demo Client</h2></Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'><h4>Main</h4></Nav.Link>
          <Nav.Link as={Link} to='/ticketsale'><h4>Ticket Sale</h4></Nav.Link>
        </Nav>
      </Navbar>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/ticketsale' component={TicketSale} />
            <Route path='/newticket' component={NewTicket} />
            <Route path='/typepage' component={TypePage} />           
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
