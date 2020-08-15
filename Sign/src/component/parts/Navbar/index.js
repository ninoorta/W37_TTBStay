import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="header">
                <div className="container">
                    <div className="header__menu">
                        <div className="header__menu-logo">
                            <Link className="navbar-brand menu-logo__link" to="/">
                                <i className="fas fa-hotel" />
                                TTBStay
                            </Link>
                        </div>
                        <ul className="header__menu-list" id="nav-right">
                            <li className="menu__list-item">
                                <Link to="/sign-up" className="list-item__link bold">Đăng kí</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link to="/sign-in" className="list-item__link bold">Đăng nhập</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar
