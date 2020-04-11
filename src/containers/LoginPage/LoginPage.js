import React, { PureComponent } from 'react';
import "./LoginPage.css";
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';


class LoginPage extends PureComponent {
    state = {}

    handleLogin = () => {
        this.props.onLogin("admin", "admin");
    }

    render() {

        if(this.props.isAuthenticated){
            return(
                <Redirect to="/" />
            )
        }

        return (
            <div className="login-container">

                <Form>
                    <Form.Item
                        label="Account"
                        name="account"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        labelCol
                    >
                        <Button onClick={this.handleLogin}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const authReducer = state.get("authReducer");
    return {
        isAuthenticated: authReducer.get("isAuthenticated"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (account, password) => dispatch(actions.login(account, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);