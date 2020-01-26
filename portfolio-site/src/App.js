import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap';

import Footer from './components/Footers';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title:'Claudia Motley',
      headerLinks:[
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home:{
        title:'Home Title Placeholder',
        subTitle:'Home Sub title placeholder',
        text:'Home Text placeholder'
      },
      about:{
        title:'About Title Placeholder',
      },
      contact:{
        title:'Contact Title Placeholder',
      },
    }
  }

  render(){
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Claudia Motley</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Footer/>
        </Container>
      </Router>
    );
  }
} 

export default App;
