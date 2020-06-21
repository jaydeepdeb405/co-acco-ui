import React from 'react'
import './HeaderTop.scss'

export default function HeaderTop() {
    return (
        <nav className="nav-top nav-wrapper indigo darken-1">
                <div className="container">
                    <ul className="left">
                        <li><a className="nav-link" href="#">Register</a></li>
                        <li><a className="nav-link" href="#">Login</a></li>
                    </ul>
                </div>
        </nav>
    )
}
