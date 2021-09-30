
import React from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

/** action types */
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

/** reducer */
const initialState = {
    toggleSidebar: false
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                toggleSidebar: action.payload.state
            };
        default:
            return state;
    }
};

/** selector */
export const getToggleSidebar = store => store.toggleSidebar;

/** actions */
export const setToggleSidebar = state => ({
    type: TOGGLE_SIDEBAR,
    payload: { state }
});

/** store */
export const rootStore = createStore(reducer);

function Header({ toggleSidebar, setToggleSidebar }) {
    console.log('Header render')
    return (
        <header>
            <h1>header</h1>
            <button onClick={()=> setToggleSidebar(!toggleSidebar)}>toggleSidebarClick</button>
        </header>)
}

const HeaderComponent =  connect(
    (store) => {
        const toggleSidebar = getToggleSidebar(store)
        return { toggleSidebar }
    },
    { setToggleSidebar }
)(Header);
  

function Body({toggleSidebar}) {
    console.log('Body render', toggleSidebar)
    return (
        <div id="content">
            <p>Content</p>
            <p style={{ marginLeft: '20px' }}>toggleSidebar: {toggleSidebar.toString()}</p>
        </div>)
}

const BodyComponent =  connect(
    (store) => {
        const toggleSidebar = getToggleSidebar(store)
        return { toggleSidebar }
    },
    null
)(Body);


function Footer() {
    console.log('Footer render')
    return <footer id="content"><span>Footer</span></footer>
}


export function UsingReduxExample() {
    console.log('parent render...')
    return (
        <Provider store={rootStore}>
            <HeaderComponent/>
            <BodyComponent/>
            <Footer />
        </Provider>
    );
}
