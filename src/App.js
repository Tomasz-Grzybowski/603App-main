import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Footer from './components/Footer';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Authenticator>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Create" element={<Create />} />
        </Routes>
        </Authenticator>
        <Footer />
      </Router>

      
      
    );
  }
}

export default App;
