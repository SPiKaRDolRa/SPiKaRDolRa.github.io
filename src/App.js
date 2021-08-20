import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch> 
      <Footer />
      </main> 
    </Router>
  );
}

export default App;