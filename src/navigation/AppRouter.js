import {
    Switch,
    Route
} from "react-router-dom";

import Home from "../pages/Home";
import ReactMemoExamplePage from "../pages/Memo";
import ReactHooksExamplePage from "../pages/Hooks";
import NotFoundPage from "../pages/NotFound";
import ReactReduxExamplePage from "../pages/Redux";
import ReactContextExamplePage from "../pages/ReactContext";

const AppRouter = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/memo">
          <ReactMemoExamplePage />
        </Route>
        <Route path="/hooks">
          <ReactHooksExamplePage />
        </Route>
        <Route path="/redux">
          <ReactReduxExamplePage />
        </Route>
        <Route path="/context">
          <ReactContextExamplePage />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    );
}

export default AppRouter