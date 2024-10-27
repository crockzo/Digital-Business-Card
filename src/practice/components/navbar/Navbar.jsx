import React from "react"
import logo from '../../assets/react.svg'
import './Navbar.style.css'
export default function Navbar() {
    return (
        <div className="nav">
            <img className="nav-logo" src={logo}/>
            <p className="nav-heading">ReactFacts</p>
            <p className="nav-subheading">React Course - Project 1</p>
        </div>
    )
}