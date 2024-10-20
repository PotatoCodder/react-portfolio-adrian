    /* eslint-disable no-unused-vars */
    import React, { useState } from 'react';
    import '../styles/SideBar.css'; // CSS for the sidebar

    function SideBar() {
    // State to track if the sidebar is open or closed on small screens
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the sidebar's visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        {/* Menu button for mobile screens */}
        <button className="menu-button" onClick={toggleSidebar}>
            Menu
        </button>

        {/* Sidebar - hidden or shown based on state */}
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
            <h1 className="sidebar-title">Info</h1>
            <h1 className='sidebar-title'>Info</h1>
            <ul className="sidebar-links">
                <li><a href="https://www.facebook.com/hikigaya09">Facebook</a></li>
                <li><a href="https://www.tiktok.com/@xides_?_t=8qh3LLKa9JK&_r=1">Tiktok</a></li>
            </ul>

            <h2 className="sidebar-subtitle">Languages</h2>
            <ul className="sidebar-links">
                <li>ReactJS</li>
                <li>JS</li>
                <li>JSX</li>
                <li>NodeJS</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
            </div>
        </aside>
        </>
    );
    }

    export default SideBar;
