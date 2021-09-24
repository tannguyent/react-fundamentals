
import React from "react";
import { Provider, connect } from "react-redux";
import { rootStore, getToggleSidebar, setToggleSidebar } from "./redux";


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
