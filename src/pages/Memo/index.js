
import { useRouteMatch } from "react-router";
import {
    Switch,
    Route
} from "react-router-dom";
import { Box, Flex } from 'components/Layout';
import {ReactMemoExample1, ReactMemoExample2, ReactMemoExample3} from 'examples/memo/'
import Link from "components/Link";

const ReactMemoExamplePage = () => {
    let { path, url } = useRouteMatch();
    return (
    <Box>
        <Flex>
            <Link title='Memo' to={`${url}/example1`}>example1</Link>
            <Link title='Memo' to={`${url}/example2`}>example2</Link>
            <Link title='Memo' to={`${url}/example3`}>example3</Link>
        </Flex>
        <Switch>
            <Route exact path={`${path}`}>
                <ReactMemoExample1 />
            </Route>
            <Route exact path={`${path}/example1`}>
                <ReactMemoExample1 />
            </Route>
            <Route exact path={`${path}/example2`}>
                <ReactMemoExample2 />
            </Route>
            <Route exact path={`${path}/example3`}>
                <ReactMemoExample3 />
            </Route>
        </Switch>
    </Box>
    )
}

export default ReactMemoExamplePage