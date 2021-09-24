import {
    Switch,
    Route
} from "react-router-dom";

import Home from "../pages/Home";
import ReactMemoExamplePage from "../pages/Memo";
import NotFoundPage from "../pages/NotFound";

const AppRouter = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/memo">
          <ReactMemoExamplePage />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    );
}

export default AppRouter