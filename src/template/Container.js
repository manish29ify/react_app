import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'
import Sidemenu from './Sidemenu';
import About from '../pages/About';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';


export default function Container() {
    return (
        <>
            <NavBar />
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <div className="row">
                    <div className="col-2">
                        <Sidemenu />
                    </div>
                    <div className="col-10">
                        <Outlet />
                    </div>
                </div>
            </div>

            <div className="jumbotron text-center" style={{ marginBottom: "0" }}>
                <p>Footer</p>
            </div>
        </>
    )
}
