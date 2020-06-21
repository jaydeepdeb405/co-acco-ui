import React from 'react'
import './Header.scss'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderSearch from './HeaderSearch'

export default function Header() {
    return (
        <header>
            <HeaderTop />
            <HeaderMain />
            <HeaderSearch />
        </header>
    )
}
