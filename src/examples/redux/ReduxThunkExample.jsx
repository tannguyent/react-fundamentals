
import React, {useEffect, useState} from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';
import memoize from 'proxy-memoize'

/**api */
const getGithubUsers = async (searchText) => {
    const response = await fetch(`https://api.github.com/search/users?q=${searchText}&per_page=5`);
    return await response.json();
}

/** action types */
export const SET_ITEMS = "SET_ITEMS";

/** reducer */
const initialState = {
    items: [], 
    searchText: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            console.log(action)
            return {
                ...state,
                items: action.payload.items
            };
        default:
            return state;
    }
};

/** selector */
// ################# memorize #######################
export const getSearchText = memoize(store => store.searchText);
export const getFilterItems = memoize(store => store.items);

/** actions */
export const setItems = (items) => ({
    type: SET_ITEMS,
    payload: { items }
});

/** redux thunk */
const getGithubUsersWithSearch = (searchText) => {
    return async (dispatch) => {
      const rs = await getGithubUsers(searchText);
      dispatch(setItems(rs.items))
    };
}

const saveGithubUsers = () => {
    return (dispatch, getState) => {
        const items = getState().items;
        console.log(`saveGithubUsersWithSearch call`, items)
        
        // clear list 
        dispatch(setItems([]))
    };
}

/** store */
export const rootStore = createStore(reducer, applyMiddleware(thunk));

const TableRedux = () => {
    const items = useSelector((store)=> getFilterItems(store));
    return (
      <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Login</td>
                <td>url</td>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
                <TableItem key={item.id} item={item} />
            ))}
        </tbody>
      </table>
    );
};

const TableItem = ({ item }) => {
    return <tr>
        <td>{item.id}</td>
        <td>{item.login}</td>
        <td>{item.url}</td>
    </tr>;
};

const SearchRedux = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const dispatch = useDispatch()

    // useEffect(
    //     () => {
    //         (async() => {
    //             if (debouncedSearchTerm) {
    //                 const rs = await getGithubUsers(debouncedSearchTerm)
    //                 dispatch(setItems(rs.items));
    //             } 
    //         })()
    //     },
    //     [debouncedSearchTerm, dispatch] 
    // );

    // redux thunk
    useEffect(
        () => {
            if (debouncedSearchTerm) {
                dispatch(getGithubUsersWithSearch(debouncedSearchTerm));
            } 
        },
        [debouncedSearchTerm, dispatch] 
    );

    return (
       <input id='txtsearch' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
    ) 
}

const Footer = () => {
    // const items = useSelector(state => getFilterItems(state));
    // const onSave = () => {
    //     console.log('call api to save', items)
    // }

    // redux thunk
    const dispatch = useDispatch()
    const onSave = () => {
        dispatch(saveGithubUsers())
    }


    console.log('Footer render')
    return <button onClick={onSave}>Save Change</button>
}



const ReduxThunkExample = () => {
    return (
        <Provider store={rootStore}>
            <SearchRedux/>
            <TableRedux />
            <Footer />
        </Provider>
    );
};

export default ReduxThunkExample;

// Hook
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] 
    );
    return debouncedValue;
}
