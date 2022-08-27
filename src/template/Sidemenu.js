import React from 'react'
import { NavLink } from 'react-router-dom';
import { sideBarRoutes } from './AppRoutes';

export default function Sidemenu() {
    return (
        <>
            <ul className="nav nav-pills flex-column">
                {sideBarRoutes.map((route, indX) => <li key={indX} className="nav-item">
                    <NavLink className="nav-link" to={route.path}>{route.name}</NavLink>
                </li>)}
            </ul>
            <hr className="d-sm-none" />
        </>
    )
}
