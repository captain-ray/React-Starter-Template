import React, { PureComponent } from 'react';
import './Query.css'
import { Layout } from 'antd';

const { Content } = Layout; // fake Sub-Body

class Query extends PureComponent {
    state = {}
    render() {
        return (
            <Content style={{ background: "#95e1d3" }}>
                Query
            </Content>
        );
    }
}

export default Query;