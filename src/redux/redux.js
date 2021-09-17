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