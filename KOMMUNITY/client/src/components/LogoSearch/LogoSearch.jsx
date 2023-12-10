import React from "react";
import Logo from "../../img/logo.png";
import "./LogoSearch.css";
import * as Unicons from '@iconscout/react-unicons';

function LogoSearch() {
    return (
        <div className="logoSearch">
            <img className="logo" src={Logo} alt="Logo"/>
            <div className="search">
                <input type="text" placeholder="#Explore"></input>
                <div className="sIcon">
                    <Unicons.UilSearch />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch;