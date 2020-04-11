import React, { PureComponent } from 'react';
import './Dashboard.css'
import { Layout } from 'antd';

const {Content} = Layout; // fake Sub-Body

class Dashboard extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <Content style={{background:"#f38181"}}>Dashboard</Content>
         );
    }
}
 
export default Dashboard;