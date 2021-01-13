import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'



function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/03-react'>
            <Home />
          </Route>
          <Route path='/03-react/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/03-react/contact'>
            <Contact />
          </Route>
        </Switch>

      </div>

    </Router>

  );
}

export default App;
