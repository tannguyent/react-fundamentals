
import React, { createContext, useContext, useReducer } from "react";

/** action types */
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const INCRESE_COUNTER = "INCRESE_COUNTER";
/** reducer */
const initialState = {
    toggleSidebar: false, 
    counter: 0, 
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                toggleSidebar: action.payload.state
            };
            case INCRESE_COUNTER:
                return {
                    ...state,
                    counter: state.counter + 1
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
export const increaseCounter = () => ({
    type: INCRESE_COUNTER,
    payload: { }
});

/** store */
export const RootContext = createContext();
const RootContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <RootContext.Provider
        value={{
            state: state,
            dispatch: dispatch,
        }}
      >
        {props.children}
      </RootContext.Provider>
    );
  };


function HeaderComponent() {
    const { state, dispatch } = useContext(RootContext);
    const { toggleSidebar } = state;

    console.log('Header render')
    return (
        <header>
            <h1>header</h1>
            <button onClick={()=> dispatch(setToggleSidebar(!toggleSidebar))}>toggleSidebarClick</button>
        </header>)
}


function BodyComponent() {
    const { state } = useContext(RootContext);
    const { toggleSidebar } = state;
    
    console.log('Body render', toggleSidebar)
    return (
        <div id="content">
            <p>Content</p>
            <p style={{ marginLeft: '20px' }}>toggleSidebar: {toggleSidebar.toString()}</p>
        </div>)
}


function Footer() {
    const { state, dispatch } = useContext(RootContext);
    const { counter } = state;

    console.log('Footer render')
    return <footer id="content"><button onClick={() => dispatch(increaseCounter())}>Increase Number {counter}</button></footer>
}

export function UsingReactContextExample() {
    console.log('parent render...')
    return (
        <RootContextProvider>
            <HeaderComponent/>
            <BodyComponent/>
            <Footer />
        </RootContextProvider>
    );
}
