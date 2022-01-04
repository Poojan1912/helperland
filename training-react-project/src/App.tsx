import React from 'react';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import Fonts from './components/fonts/Fonts';
import Buttons from './components/buttons/Buttons';
import Checkboxes from './components/checkboxes/Checkboxes';
import RadioSelector from './components/radio/Radio';
import SelectElement from './components/select/Select'
import Tables from './components/table/Table'
import Alerts from './components/alert/Alerts'

import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/fonts">Fonts</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/checkboxes">Checkbox</Link>
            </li>
            <li>
              <Link to="/radio">Radio</Link>
            </li>
            <li>
              <Link to="/select">Select</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/alert">Alerts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/fonts">
            <Fonts />
          </Route>
          <Route path="/buttons">
            <Buttons />
          </Route>
          <Route path="/checkboxes">
            <Checkboxes />
          </Route>
          <Route path="/radio">
            <RadioSelector />
          </Route>
          <Route path="/select">
            <SelectElement />
          </Route>
          <Route path="/table">
            <Tables/>
          </Route>
          <Route path="/alert">
            <Alerts/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
