import React from 'react';
import './Header.css'
import { Layout, Button } from 'antd';

const HeaderAnt = Layout.Header; // fake header

const Header = (props) => {
    return (
        <HeaderAnt>
            Header
            <Button onClick={props.logout} style={{marginLeft:100}}>Logout</Button>
        </HeaderAnt>
    );
}



export default Header;