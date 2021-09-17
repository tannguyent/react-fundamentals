
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {ReactMemoExample1, ReactMemoExample2, ReactMemoExample3} from "./memo";
import { NotUsingReduxExample } from "./redux/NotUsingReduxExample";
import { UsingReduxExample } from "./redux/UsingReduxExample";
import UncontrolledExample from "./uncontrolled";

function Home() {
  return (<h1>Welcome to React fundamentals</h1>)
}

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
              <Link to="/memo">React memo</Link>
            </li>
            <li>
              <Link to="/uncontrolled">React uncontrolled component</Link>
            </li>
            <li>
              <Link to="/react-hooks">React Hooks</Link>
            </li>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/memo">
            <ReactMemoExample3 />
          </Route>
          <Route path="/uncontrolled">
            <UncontrolledExample />
          </Route>
          <Route path="/redux">
            <UsingReduxExample />
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
