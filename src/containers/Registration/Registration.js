import React, { PureComponent } from 'react';
import './Registration.css'
import { Layout } from 'antd';

const { Content } = Layout; // fake Sub-Body

class Registration extends PureComponent {
    state = {}
    render() {
        return (
            <Content style={{ background: "#efa8e4" }}>
                Registration
            </Content>
        );
    }
}

export default Registration;