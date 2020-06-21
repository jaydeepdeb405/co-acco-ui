import React from 'react'

export default function HeaderSearch() {
    return (
        <nav className="header-search nav-wrapper indigo">
            <div className="container">
                <a className='dropdown-trigger btn yellow' style={{color: 'black', borderRadius: 'none'}} href='#' data-target='dropdown1'>RENT</a>
                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                </ul>
            </div>
        </nav>
    )
}
