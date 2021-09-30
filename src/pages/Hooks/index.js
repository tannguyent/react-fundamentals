
import { useRouteMatch } from "react-router";
import {
    Switch,
    Route
} from "react-router-dom";

import Link from "components/Link";
import { Box, Flex } from 'components/Layout';
import UseEffectExample from 'examples/react-hooks/UseEffectExample'
import UseMemoExample from "examples/react-hooks/UseMemoExample";
import UseCallbackExample from "examples/react-hooks/UseCallbackExample";
import CreateHooksExample from "examples/react-hooks/CreateHooksExample";

const ReactHooksExamplePage = () => {
    let { path, url } = useRouteMatch();
    return (
    <Box>
        <Flex>
            <Link title='Memo' to={`${url}/useEffect`}>useEffect</Link>
            <Link title='Memo' to={`${url}/useMemo`}>useMemo</Link>
            <Link title='Memo' to={`${url}/useCallback`}>useCallback</Link>
            <Link title='Memo' to={`${url}/createNewHook`}>createNewHook</Link>
        </Flex>
        <Switch>
            <Route exact path={`${path}/useEffect`}>
                <UseEffectExample />
            </Route>
            <Route exact path={`${path}/useMemo`}>
                <UseMemoExample />
            </Route>
            <Route exact path={`${path}/useCallback`}>
                <UseCallbackExample />
            </Route>
            <Route exact path={`${path}/createNewHook`}>
                <CreateHooksExample />
            </Route>
        </Switch>
    </Box>
    )
}

export default ReactHooksExamplePage