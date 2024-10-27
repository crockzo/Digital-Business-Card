import React from "react"
import "./MainContent.style.css"

export default function MainContent() {
    return (
    
        <div className="main">
            <p className="main-header">Fun facts about React</p>
            <ul className="main-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            {/* <img className="main-bg-image" src={backgroundlogo} alt="background-logo"/> */}
        </div>
    
    )
}
