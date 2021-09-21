import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Users }  from './Users';
import '../Styles/App.css'
import { Publications } from './Publications';

function App() {
  return (
      <BrowserRouter >
      <header className="Header">
          <ul>
              <li className="Header__Item">
                  <Link to='/' className="Header__Link" >Users </Link>
              </li>
              <li className="Header__Item">
                  <Link to='/' className="Header__Link" >Tasks </Link>
              </li>
          </ul>
      </header>
      <Switch>
          <Route exact path="/">
              <Users/>
          </Route>
          <Route path="/userPublications/:key">
            <Publications/>
          </Route>
      </Switch>
      </BrowserRouter>
  );
}


export { App, };
