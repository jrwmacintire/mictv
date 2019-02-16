import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import TVSet from './components/layout/TVSet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render= { props => (
              <React.Fragment>
                <TVSet />
              </React.Fragment>
            )} />
            <Route path='/about' component={ About } />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
