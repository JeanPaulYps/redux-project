import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Users }  from './Users';
import '../Styles/App.css'
import { Publications } from './Publications';
import { Tasks } from './Tasks';

function App() {
  return (
      <BrowserRouter >
      <header className="Header">
          <ul>
              <li className="Header__Item">
                  <Link to='/' className="Header__Link" >Users </Link>
              </li>
              <li className="Header__Item">
                  <Link to='/tasks' className="Header__Link" >Tasks </Link>
              </li>
          </ul>
      </header>
      <Switch>
          <Route exact path="/">
              <Users/>
          </Route>
          <Route path="/userPublications/:userId">
            <Publications/>
          </Route>
          <Route path="/tasks">
              <Tasks/>
          </Route>
      </Switch>
      </BrowserRouter>
  );
}


export { App, };
