
import { useRouteMatch } from "react-router";
import {
    Switch,
    Route
} from "react-router-dom";
import { Box, Flex } from 'components/Layout';
import Link from "components/Link";
import { NotUsingReduxExample } from "examples/redux/NotUsingReduxExample";
import { UsingReduxExample } from "examples/redux/UsingReduxExample";
import ReduxMemoizeExample from "examples/redux/ReduxMemoize";
import ReduxThunkExample from "examples/redux/ReduxThunkExample";

const ReactReduxExamplePage = () => {
    let { path, url } = useRouteMatch();
    return (
    <Box>
        <Flex>
            <Link title='Memo' to={`${url}/not-redux`}>not-redux</Link>
            <Link title='Memo' to={`${url}/redux`}>redux</Link>
            <Link title='Memo' to={`${url}/redux-memorize`}>redux-memorize</Link>
            <Link title='Memo' to={`${url}/redux-thunk`}>redux-thunk</Link>
        </Flex>
        <Switch>
            <Route exact path={`${path}/not-redux`}>
                <NotUsingReduxExample />
            </Route>
            <Route exact path={`${path}/redux`}>
                <UsingReduxExample />
            </Route>
            <Route exact path={`${path}/redux-memorize`}>
                <ReduxMemoizeExample />
            </Route>
            <Route exact path={`${path}/redux-thunk`}>
                <ReduxThunkExample />
            </Route>
        </Switch>
    </Box>
    )
}

export default ReactReduxExamplePage