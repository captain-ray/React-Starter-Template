import React, { PureComponent } from 'react';
import './Application.css'
import { Layout } from 'antd';

const { Content } = Layout; // fake Sub-Body

class Application extends PureComponent {
    state = {}
    render() {
        return (
            <Content style={{ background: "#fce38a" }}>
                Application
            </Content>
        );
    }
}

export default Application;