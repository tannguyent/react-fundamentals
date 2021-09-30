
import { useRouteMatch } from "react-router";
import {
    Switch,
    Route
} from "react-router-dom";
import { Box, Flex } from 'components/Layout';
import Link from "components/Link";
import { UsingReactContextExample } from "examples/react-context/UsingReduxExample";

const ReactContextExamplePage = () => {
    let { path, url } = useRouteMatch();
    return (
    <Box>
        <Flex>
            <Link title='Memo' to={`${url}/react-context`}>react-context</Link>
        </Flex>
        <Switch>
            <Route exact path={`${path}/react-context`}>
                <UsingReactContextExample />
            </Route>
        </Switch>
    </Box>
    )
}

export default ReactContextExamplePage