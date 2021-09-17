
import React, {useState} from "react";

function Header({ toggleSidebarClick }) {
    console.log('Header render')
    return (
        <header>
            <h1>header</h1>
            <button onClick={toggleSidebarClick}>toggleSidebarClick</button>
        </header>)
}

function Body({toggleSidebar}) {
    console.log('Body render', toggleSidebar)
    return (
        <div id="content">
            <p>Content</p>
            <p style={{ marginLeft: '20px' }}>toggleSidebar: {toggleSidebar.toString()}</p>
        </div>)
}

function Footer() {
    console.log('Footer render')
    return <footer id="content"><span>Footer</span></footer>
}

export function NotUsingReduxExample() {
    const [toggleSidebar, setToggleSidebar] = useState(false)

    function toggleSidebarClick() {
        setToggleSidebar(!toggleSidebar)
    }

    console.log('parent render....')
    return (
        <React.Fragment>
            <Header toggleSidebarClick={toggleSidebarClick}/>
            <Body toggleSidebar={toggleSidebar}/>
            <Footer />
        </React.Fragment>
    );
}