import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { 
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText } from 'reactstrap'
import Home from './pages/Home'
import Support from './pages/Support'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>reactstrap</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/03-react">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/03-react/support">Support</Link>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
        </Navbar>
        <Switch>
          <Route exact path="/03-react">
            <Home />
          </Route>
          <Route path="/03-react/support">
            <Support />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
