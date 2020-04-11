import React from 'react';
import './SideMenu.css'
import { Layout } from 'antd';
import { withRouter, Link } from "react-router-dom";

const SideMenuAnt = Layout.Sider; // fake sidemenu

const SideMenu = (props) => {

    return (
        <SideMenuAnt>
            <ul style={{listStyleType:"none"}}>
                <li>
                    <Link to="/dashboard" style={{color:"#fff"}}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/application" style={{color:"#fff"}}>Application</Link>
                </li>
                <li>
                    <Link to="/registration" style={{color:"#fff"}}>Registration</Link>
                </li>
                <li>
                    <Link to="/query" style={{color:"#fff"}}>Query</Link>
                </li>
            </ul>
        </SideMenuAnt>
    );
}



export default withRouter(SideMenu);