
import React from "react";
import { Provider, connect, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import memoize from 'proxy-memoize'


/** action types */
export const UPDATE_ITEM_QUALITY = "UPDATE_ITEM_QUALITY";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

/** reducer */
const initialState = {
    items: [{id: 1, name: 'product1', quality: 1, price: 10},{id: 2, name: 'product2', quality: 1, price: 20}], 
    searchText: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ITEM_QUALITY:
            return {
                ...state,
                items: state.items.map(c=> c.id === action.payload.id ? {...c, quality: action.payload.quality} : c )
            };
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload.searchText
            };
        default:
            return state;
    }
};

/** selector */
// export const getSearchText = store => store.searchText;

// export const getTotalQuality = store => store.items.reduce((total, item) => {
//     console.log('getTotalQuality function is running ...');
//     return total + item.quality;
// }, 0);
// export const getTotalPrice = store => store.items.reduce((total, item) => {
//     console.log('getTotalPrice function is running ...');
//     return total + (item.quality * item.price);
// }, 0);
// export const getFilterItems = store => store.items.filter((item) => {
//     console.log('getFilterItems function is running ...');
//     return item.name.toLowerCase().includes(store.searchText.toLowerCase());
//   })
//   .map(c=>({...c, total: c.quality * c.price}));


// ################# memorize #######################
export const getSearchText = memoize(store => store.searchText);

export const getTotalQuality = memoize(store => store.items.reduce((total, item) => {
      console.log('getTotalQuality function is running ...');
      return total + item.quality;
  }, 0));

  export const getTotalPrice = memoize(store => store.items.reduce((total, item) => {
      console.log('getTotalPrice function is running ...');
      return total + (item.quality * item.price);
  }, 0));

  export const getFilterItems = memoize(store => store.items.filter((item) => {
      console.log('getFilterItems function is running ...');
      return item.name.toLowerCase().includes(store.searchText.toLowerCase());
    })
    .map(c=>({...c, total: c.quality * c.price}))
);

/** actions */
export const updateItemQuality = (id, quality) => ({
    type: UPDATE_ITEM_QUALITY,
    payload: { id, quality }
});

export const setSearchText = (searchText) => ({
    type: SET_SEARCH_TEXT,
    payload: { searchText }
});

/** store */
export const rootStore = createStore(reducer);

const Table = ({ items }) => {
    return (
      <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Quality</td>
                <td>Price</td>
                <td>Total</td>
            </tr>
        </thead>
        {items.map((item) => (
          <TableItem key={item.id} item={item} />
        ))}
      </table>
    );
};

const TableRedux = connect(
    (store) => {
        const items = getFilterItems(store);
        return { items}
    },
    {  }
)(Table);

const TableItem = ({ item }) => {
    return <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.quality}</td>
        <td>{item.price}</td>
        <td>{item.total}</td>
    </tr>;
};

// ################### useSelector ####################
const SumaryRedux = () => {
    const totalQuality = useSelector(state => getTotalQuality(state))
    const totalPrice = useSelector(state => getTotalPrice(state))
    return (
        <>
            <span>totalQuality : {totalQuality}</span>
            <span>totalPrice : {totalPrice}</span>
        </>
    ) 
}



const SearchRedux = () => {
    const searchText = useSelector(state => getSearchText(state))
    const dispatch = useDispatch()

    console.log('Search component render')
    return (
       <input id='txtsearch' value={searchText} onChange={(e) => dispatch(setSearchText(e.target.value))}></input>
    ) 
}

const ReduxMemoizeExample = () => {
    return (
        <Provider store={rootStore}>
            <SearchRedux/>
            <TableRedux />
            <SumaryRedux />
        </Provider>
    );
};

export default ReduxMemoizeExample;
