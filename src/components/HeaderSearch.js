import React, { useEffect } from 'react'
import M from 'materialize-css'

export default function HeaderSearch() {

    useEffect(() => {
        M.Dropdown.init(document.querySelector('.dropdown-trigger'), {});
    }, [])

    return (
        <nav className="header-search nav-wrapper indigo">
            <div className="container">
                <a className='dropdown-trigger btn yellow' style={{color: 'black', borderRadius: 'none'}} href='#' data-target='dropdown1'>RENT</a>
                <ul id='dropdown1' className='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                </ul>
            </div>
        </nav>
    )
}
