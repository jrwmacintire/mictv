import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Shop from './components/pages/Shop';
import Shows from './components/pages/Shows';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import TVSet from './components/layout/TVSet';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Switch>
              <Route path='/shop' component={ Shop } />
              <Route path='/shows' component={ Shows } />
              <Route path='/contact' component={ Contact } />
              <Route path='/about' component={ About } />
              <Route path='/' component={ TVSet } />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
